import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Users, TrendingUp } from "lucide-react";

export interface NCOResult {
  code: string;
  title: string;
  description: string;
  confidence: number;
  category: string;
  relatedTerms?: string[];
}

interface SearchResultsProps {
  results: NCOResult[];
  query: string;
}

export const SearchResults = ({ results, query }: SearchResultsProps) => {
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return "confidence-high";
    if (confidence >= 70) return "confidence-medium";
    return "confidence-low";
  };

  const getConfidenceBadgeVariant = (confidence: number) => {
    if (confidence >= 90) return "default";
    if (confidence >= 70) return "secondary";
    return "outline";
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "professionals":
        return <BookOpen className="w-4 h-4" />;
      case "service workers":
        return <Users className="w-4 h-4" />;
      default:
        return <TrendingUp className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Search Results for "{query}"
        </h2>
        <p className="text-muted-foreground">
          Found {results.length} matching occupation codes using AI semantic search
        </p>
      </div>

      <div className="grid gap-4">
        {results.map((result, index) => (
          <Card
            key={result.code}
            className="p-6 hover:shadow-medium transition-all duration-300 animate-fade-in bg-gradient-card border-0 shadow-soft"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="outline" className="font-mono text-sm">
                    {result.code}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {getCategoryIcon(result.category)}
                    <span>{result.category}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {result.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {result.description}
                </p>

                {result.relatedTerms && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    <span className="text-xs text-muted-foreground mr-2">Related:</span>
                    {result.relatedTerms.map((term) => (
                      <Badge
                        key={term}
                        variant="secondary"
                        className="text-xs bg-accent/50"
                      >
                        {term}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col items-end gap-2 ml-4">
                <Badge
                  variant={getConfidenceBadgeVariant(result.confidence)}
                  className="text-xs"
                >
                  {result.confidence}% Match
                </Badge>
                
                <div className="w-24">
                  <Progress
                    value={result.confidence}
                    className="h-2"
                    style={{
                      [`--confidence-width` as any]: `${result.confidence}%`
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-border/50">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary/60" />
                <span>NCO-2015 Classification</span>
              </div>
              
              <button className="text-xs text-primary hover:text-primary-hover transition-colors">
                View Full Details →
              </button>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center pt-6">
        <p className="text-sm text-muted-foreground">
          Powered by AI semantic matching • Results ranked by relevance
        </p>
      </div>
    </div>
  );
};