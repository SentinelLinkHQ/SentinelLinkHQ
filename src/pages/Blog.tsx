import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { PlusCircle, Calendar, User } from "lucide-react";

interface Article {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  excerpt: string;
}

const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([
    {
      id: "1",
      title: "Understanding Modern Cybersecurity Threats",
      content: "In today's digital landscape, cybersecurity threats are evolving rapidly. Organizations must stay vigilant and implement comprehensive security measures to protect their digital assets...",
      author: "Sentinel Link Team",
      date: "2024-01-15",
      excerpt: "A comprehensive guide to identifying and mitigating modern cybersecurity threats in enterprise environments."
    }
  ]);
  
  const [isCreating, setIsCreating] = useState(false);
  const [newArticle, setNewArticle] = useState({
    title: "",
    content: "",
    author: "",
    excerpt: ""
  });

  const handleCreateArticle = () => {
    if (newArticle.title && newArticle.content && newArticle.author) {
      const article: Article = {
        id: Date.now().toString(),
        ...newArticle,
        date: new Date().toISOString().split('T')[0]
      };
      setArticles([article, ...articles]);
      setNewArticle({ title: "", content: "", author: "", excerpt: "" });
      setIsCreating(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Cybersecurity <span className="bg-gradient-primary bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Stay informed with the latest cybersecurity trends, threat intelligence, and best practices from our security experts.
            </p>
            
            <Button 
              onClick={() => setIsCreating(!isCreating)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyber"
            >
              <PlusCircle className="w-4 h-4 mr-2" />
              {isCreating ? "Cancel" : "Create New Article"}
            </Button>
          </div>

          {/* Create Article Form */}
          {isCreating && (
            <Card className="mb-12 bg-surface-elevated border-border shadow-elevated">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Create New Article</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Title</label>
                    <Input
                      value={newArticle.title}
                      onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                      placeholder="Article title"
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Author</label>
                    <Input
                      value={newArticle.author}
                      onChange={(e) => setNewArticle({ ...newArticle, author: e.target.value })}
                      placeholder="Author name"
                      className="bg-background border-border"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Excerpt</label>
                  <Textarea
                    value={newArticle.excerpt}
                    onChange={(e) => setNewArticle({ ...newArticle, excerpt: e.target.value })}
                    placeholder="Brief description of the article"
                    className="bg-background border-border h-20"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Content</label>
                  <Textarea
                    value={newArticle.content}
                    onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
                    placeholder="Write your article content here..."
                    className="bg-background border-border h-40"
                  />
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    onClick={handleCreateArticle}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Publish Article
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setIsCreating(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Articles List */}
          <div className="grid gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="bg-surface-elevated border-border shadow-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground hover:text-primary transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="prose prose-sm max-w-none text-foreground">
                    <p>{article.content.substring(0, 300)}...</p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-surface-subtle py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-4">
            <h3 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
              Sentinel Link
            </h3>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Sentinel Link. Business Registration: 1856748. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6 text-sm text-muted-foreground">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Blog;