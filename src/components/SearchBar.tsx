import { useState } from "react";
import { Search, Mic, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
  loading?: boolean;
}

export const SearchBar = ({ onSearch, loading }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center">
          <div className="absolute left-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-muted-foreground" />
          </div>
          
          <Input
            type="text"
            placeholder="Enter job title or description (e.g., 'software developer', 'tailor', 'nurse')"
            value={query}
            onChange={handleInputChange}
            className="w-full pl-12 pr-32 py-6 text-lg rounded-2xl border-2 border-input-border bg-input shadow-soft focus:shadow-glow focus:border-primary transition-all duration-300"
            disabled={loading}
          />
          
          <div className="absolute right-2 flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-10 w-10 rounded-xl hover:bg-accent transition-transform duration-200 hover:scale-105"
              title="Voice Search (Demo)"
            >
              <Mic className="w-4 h-4" />
            </Button>
            
            <Button
              type="submit"
              disabled={!query.trim() || loading}
              className="h-10 px-6 rounded-xl bg-gradient-primary hover:opacity-90 transition-all duration-300 active:scale-[0.98]"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Searching...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Search</span>
                </div>
              )}
            </Button>
          </div>
        </div>
      </form>
      
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        <span className="text-sm text-muted-foreground">Try:</span>
        {["Software Engineer", "Tailor", "Nurse", "Teacher", "Chef"].map((suggestion) => (
          <Button
            key={suggestion}
            variant="outline"
            size="sm"
            onClick={() => {
              setQuery(suggestion);
              onSearch(suggestion);
            }}
            className="text-xs rounded-full border-primary/20 hover:border-primary hover:bg-primary-light transition-all duration-200 hover:scale-105"
          >
            {suggestion}
          </Button>
        ))}
      </div>
    </div>
  );
};