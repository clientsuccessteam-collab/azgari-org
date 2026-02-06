"use client";

interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
  className?: string;
  children: React.ReactNode;
}

export default function ShareButton({ title, text, url, className, children }: ShareButtonProps) {
  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch (err) {
        // User cancelled or share failed, fall back to clipboard
        if (err instanceof Error && err.name !== 'AbortError') {
          await navigator.clipboard.writeText(url);
          alert('Link copied to clipboard!');
        }
      }
    } else {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <button onClick={handleShare} className={className}>
      {children}
    </button>
  );
}
