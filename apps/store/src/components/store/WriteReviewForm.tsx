"use client";

import { useState } from "react";
import { Button, Input, Textarea } from "@repo/ui/ui";
import { StarPicker } from "../ui";
import { useStore } from "../../store/StoreProvider";
import { buildReview } from "../../services/reviewService";
import { showToast } from "../../hooks/useToast";
import { mockUser } from "../../data";

export function WriteReviewForm({ appSlug, onDone }: { appSlug: string; onDone?: () => void }) {
  const { dispatch } = useStore();
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (rating === 0) {
      setError("Select a star rating to continue.");
      return;
    }
    if (content.trim().length < 5) {
      setError("Add a few words about your experience.");
      return;
    }
    const review = buildReview({ appSlug, author: mockUser.name, rating, title: title.trim() || undefined, content: content.trim() });
    dispatch({ type: "ADD_REVIEW", slug: appSlug, review });
    showToast("Review submitted", "success");
    setRating(0);
    setTitle("");
    setContent("");
    setError("");
    onDone?.();
  };

  return (
    <div className="space-y-3.5">
      <div>
        <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
          Your rating
        </label>
        <StarPicker value={rating} onChange={setRating} />
      </div>
      <div>
        <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
          Title (optional)
        </label>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Sum it up in a few words" />
      </div>
      <div>
        <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
          Review
        </label>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What did you like or dislike?"
          rows={4}
        />
      </div>
      {error && (
        <p className="text-xs" style={{ color: "var(--danger)" }}>
          {error}
        </p>
      )}
      <Button onClick={submit} className="w-full sm:w-auto">
        Submit Review
      </Button>
    </div>
  );
}
