export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">
              Sunnydale Research Club
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            ©2025 Sunnydale Research Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
