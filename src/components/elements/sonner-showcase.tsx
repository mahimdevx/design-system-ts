"use client";

import { toast } from "sonner";

import { Button } from "./button";
import { Icon } from "./icon";

export function SonnerShowcase() {
  const firePromise = () => {
    const promise = new Promise<string>((resolve) =>
      setTimeout(() => resolve("Upload complete"), 2000)
    );
    toast.promise(promise, {
      loading: "Uploading file...",
      success: (data) => data,
      error: "Upload failed"
    });
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold">Default</p>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => toast("Event has been created")}
          >
            Default
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              toast("Event has been created", {
                description: "Monday, January 3rd at 6:00pm"
              })
            }
          >
            With Description
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold">Variants (Rich Colors)</p>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="soft"
            size="sm"
            onClick={() =>
              toast.success("Profile updated", {
                description: "Your profile has been saved successfully."
              })
            }
          >
            <Icon name="CheckCircle2" size="sm" />
            Success
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() =>
              toast.error("Something went wrong", {
                description: "Unable to save changes. Please try again."
              })
            }
          >
            <Icon name="XCircle" size="sm" />
            Error
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() =>
              toast.warning("Storage almost full", {
                description: "You are using 90% of your available storage."
              })
            }
          >
            <Icon name="AlertTriangle" size="sm" />
            Warning
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() =>
              toast.info("Update available", {
                description: "A new version of the app is ready to install."
              })
            }
          >
            <Icon name="Info" size="sm" />
            Info
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold">With Action</p>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              toast("File deleted", {
                description: "document.pdf was moved to trash.",
                action: {
                  label: "Undo",
                  onClick: () => toast.success("File restored")
                }
              })
            }
          >
            With Action Button
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              toast("Message sent", {
                description: "Your message has been delivered.",
                action: {
                  label: "View",
                  onClick: () => {}
                },
                cancel: {
                  label: "Dismiss",
                  onClick: () => {}
                }
              })
            }
          >
            Action + Cancel
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold">Loading &amp; Promise</p>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const id = toast.loading("Processing request...");
              setTimeout(() => toast.success("Done!", { id }), 2000);
            }}
          >
            <Icon name="Loader2" size="sm" />
            Loading
          </Button>
          <Button variant="outline" size="sm" onClick={firePromise}>
            <Icon name="Upload" size="sm" />
            Promise
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold">Custom / Headless</p>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              toast.custom((id) => (
                <div className="bg-background border-border flex w-80 items-start gap-3 rounded-lg border p-4 shadow-lg">
                  <div className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                    <Icon name="Bell" size="sm" className="text-primary" />
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <p className="text-sm font-medium">New notification</p>
                    <p className="text-muted-foreground text-xs">
                      You have a new message from the team.
                    </p>
                    <div className="mt-2 flex gap-2">
                      <button
                        className="bg-primary text-primary-foreground rounded px-2.5 py-1 text-xs font-semibold"
                        onClick={() => toast.dismiss(id)}
                      >
                        View
                      </button>
                      <button
                        className="text-muted-foreground text-xs"
                        onClick={() => toast.dismiss(id)}
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              ))
            }
          >
            Custom Toast
          </Button>
        </div>
      </div>
    </div>
  );
}
