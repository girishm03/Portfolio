"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, User, BookOpen, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Validate fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill out all fields before submitting.");
      return;
    }

    try {
      // Deliver to girishmadhu03@gmail.com via FormSubmit AJAX endpoint
      const response = await fetch("https://formsubmit.co/ajax/girishmadhu03@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Contact] ${formData.subject}`,
          message: formData.message,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true || response.status === 200)) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Failed to deliver message. Please try again or email directly.");
      }
    } catch (err: unknown) {
      console.error("Contact Form submission error:", err);
      // Even if network or CORS has a hiccup, provide friendly fallback
      setStatus("error");
      setErrorMessage(
        "Could not send automatically. Please email directly to girishmadhu03@gmail.com or try again."
      );
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto text-left bg-card/60 backdrop-blur-md border border-border/80 shadow-xl rounded-2xl p-6 sm:p-8">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground font-headline flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          Send a Direct Message
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Have an inquiry, project proposal, or job opportunity? Messages are delivered straight to my inbox.
        </p>
      </div>

      {status === "success" && (
        <div className="mb-6 p-4 rounded-xl bg-primary/10 border border-primary/30 text-foreground flex items-start gap-3 animate-in fade-in">
          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-primary">Message Sent Successfully!</p>
            <p className="text-sm text-muted-foreground mt-0.5">
              Thank you for reaching out. I have received your message and will reply to your email as soon as possible.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-3 text-xs"
              onClick={() => setStatus("idle")}
            >
              Send Another Message
            </Button>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive flex items-start gap-3 animate-in fade-in">
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold">Submission Issue</p>
            <p className="mt-0.5">{errorMessage}</p>
            <div className="mt-2">
              <a
                href={`mailto:girishmadhu03@gmail.com?subject=${encodeURIComponent(
                  formData.subject || "Portfolio Inquiry"
                )}&body=${encodeURIComponent(formData.message || "")}`}
                className="inline-flex items-center gap-1.5 text-xs font-medium underline hover:text-foreground"
              >
                <Mail className="h-3.5 w-3.5" /> Open default email app to send
              </a>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-sm font-medium flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-muted-foreground" />
              Your Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="e.g. Alex Johnson"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={status === "loading"}
              className="bg-background/80 focus-visible:ring-primary"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-sm font-medium flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-muted-foreground" />
              Your Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="alex@example.com"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={status === "loading"}
              className="bg-background/80 focus-visible:ring-primary"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="subject" className="text-sm font-medium flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5 text-muted-foreground" />
            Subject <span className="text-destructive">*</span>
          </Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder="Job Opportunity / Project Collaboration / Inquiry"
            required
            value={formData.subject}
            onChange={handleChange}
            disabled={status === "loading"}
            className="bg-background/80 focus-visible:ring-primary"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="message" className="text-sm font-medium flex items-center gap-1.5">
            <MessageSquare className="h-3.5 w-3.5 text-muted-foreground" />
            Message <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Write your message details here..."
            required
            value={formData.message}
            onChange={handleChange}
            disabled={status === "loading"}
            className="bg-background/80 focus-visible:ring-primary resize-y"
          />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            Delivers directly to: <span className="font-mono text-foreground font-semibold">girishmadhu03@gmail.com</span>
          </p>

          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full sm:w-auto px-6 font-semibold shadow-md transition-all hover:shadow-primary/20"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
