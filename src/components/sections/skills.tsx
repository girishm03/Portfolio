"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { defaultSkills } from "@/lib/data";
import { PythonIcon, DjangoIcon, ReactIcon, FlaskIcon } from "@/components/icons";
import { useMemo } from "react";

const iconMap: { [key: string]: React.ComponentType<any> } = {
    PythonIcon,
    DjangoIcon,
    ReactIcon,
    FlaskIcon,
};

export function Skills() {
    const skills = useMemo(() => {
        return defaultSkills.map(skill => {
            const IconComponent = skill.iconName ? iconMap[skill.iconName] : null;
            return {
                ...skill,
                icon: IconComponent,
            }
        })
    }, [defaultSkills]);

    return (
        <Card>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {skill.icon && <skill.icon className="w-5 h-5 text-muted-foreground" />}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
                  </div>
                ))}
            </CardContent>
        </Card>
    );
}
