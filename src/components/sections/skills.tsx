import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {skills.map((skillCategory) => (
        <Card key={skillCategory.category}>
          <CardHeader>
            <CardTitle>{skillCategory.category}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {skillCategory.items.map((skill) => (
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
      ))}
    </div>
  );
}
