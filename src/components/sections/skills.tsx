import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/lib/data";

export function Skills() {
    const allSkills = skills.flatMap(category => category.items);
  return (
    <Card>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
            {allSkills.map((skill) => (
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
