"use client";

import { CategoryScroll } from "@/components/settings/CategoryScroll";
import { useAuthStatus } from "@/hooks/useAuthStatus";

import VideoLearningSettingsPage from "../video-learning/page";
import ToolsSettingsPage from "../tools/page";
import CapabilitiesSettingsPage from "../capabilities/page";
import StarterSettingsPage from "../starters/page";
import AttachmentSettingsPage from "../attachments/page";

/**
 * The Chat category, in full — see `ModelsSettingsPage` for the pattern.
 */
export default function ChatSettingsPage() {
  const { enabled, isAdmin, loading } = useAuthStatus();
  const showVideoLearning = !loading && (!enabled || isAdmin);

  return (
    <CategoryScroll
      sections={[
        ...(showVideoLearning
          ? [{ key: "video-learning", Component: VideoLearningSettingsPage }]
          : []),
        { key: "tools", Component: ToolsSettingsPage },
        { key: "capabilities", Component: CapabilitiesSettingsPage },
        { key: "starters", Component: StarterSettingsPage },
        { key: "attachments", Component: AttachmentSettingsPage },
      ]}
    />
  );
}
