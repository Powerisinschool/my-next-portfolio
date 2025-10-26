"use client";

import * as React from "react";
import { skillsData } from "@/lib/skills-data";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(
    skillsData[0]
  );

  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="space-y-4">
            {skillsData.map((category) => (
              <button
                key={category.category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "w-full p-4 rounded-lg border text-left flex items-center gap-4 transition-all bg-card hover:-translate-y-1",
                  selectedCategory.category === category.category
                    ? "border-primary"
                    : "border-card hover:border-muted-foreground/20"
                )}
              >
                <div
                  className={cn(
                    "p-3 rounded-lg transition-colors",
                    selectedCategory.category === category.category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  <category.icon size={20} />
                </div>
                <span className="font-semibold text-base">
                  {category.category}
                </span>
              </button>
            ))}
          </div>
          <div className="md:col-span-2">
            <Card className="min-h-[450px]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {selectedCategory.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {selectedCategory.skills.map((skill) => (
                  <div key={`${selectedCategory.category}-${skill.name}`}>
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={cn(
                              "h-2.5 w-5",
                              i < skill.level ? "bg-primary/80" : "bg-muted",
                              i === 0 && "rounded-l-md",
                              i === 4 && "rounded-r-md"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};