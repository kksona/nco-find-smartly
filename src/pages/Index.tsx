import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { SearchBar } from "@/components/SearchBar";
import { SearchResults, NCOResult } from "@/components/SearchResults";
import { getSearchResults } from "@/data/mockResults";

const Index = () => {
  const [searchResults, setSearchResults] = useState<NCOResult[]>([]);
  const [currentQuery, setCurrentQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setCurrentQuery(query);
    setHasSearched(true);

    // Simulate API delay for realistic feel
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    const results = getSearchResults(query);
    setSearchResults(results);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-12">
          <HeroSection />
        </header>

        {/* Search Section */}
        <section className="mb-12">
          <SearchBar onSearch={handleSearch} loading={isLoading} />
        </section>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center gap-3 text-lg text-muted-foreground">
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <span>Analyzing your search with AI...</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Processing semantic patterns and matching occupation codes
            </p>
          </div>
        )}

        {/* Results Section */}
        {hasSearched && !isLoading && searchResults.length > 0 && (
          <section className="animate-fade-in">
            <SearchResults results={searchResults} query={currentQuery} />
          </section>
        )}

        {/* Empty State */}
        {hasSearched && !isLoading && searchResults.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground">
              <p className="text-lg mb-2">No results found for "{currentQuery}"</p>
              <p className="text-sm">Try using different keywords or check the suggested terms above.</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-border/50 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            NCO Smart Search Prototype • Built with AI-powered semantic matching
          </p>
          <p className="text-xs text-muted-foreground">
            Using National Classification of Occupations (NCO-2015) • Demo Version
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
