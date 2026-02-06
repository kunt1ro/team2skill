import { useState } from "react";
import { TopBar } from "./components/TopBar";
import { Sidebar } from "./components/Sidebar";
import { BottomNav } from "./components/BottomNav";
import { JoinCourse } from "./screens/JoinCourse";
import { HomeScreen } from "./screens/HomeScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { CourseScreen } from "./screens/CourseScreen";
import { TeamScreen } from "./screens/TeamScreen";
import { SupportScreen } from "./screens/SupportScreen";

export default function App() {
  const [hasJoined, setHasJoined] = useState(true); // Set to false to show join screen
  const [activeScreen, setActiveScreen] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Show join course screen if user hasn't joined
  if (!hasJoined) {
    return (
      <div className="min-h-screen bg-background dark">
        <JoinCourse onJoin={() => setHasJoined(true)} />
      </div>
    );
  }

  const renderScreen = () => {
    switch (activeScreen) {
      case "home":
        return <HomeScreen onNavigate={setActiveScreen} />;
      case "profile":
        return <ProfileScreen />;
      case "course":
        return <CourseScreen />;
      case "team":
        return <TeamScreen onNavigate={setActiveScreen} />;
      case "support":
        return <SupportScreen />;
      default:
        return <HomeScreen onNavigate={setActiveScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-background dark">
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          activeScreen={activeScreen}
          onNavigate={setActiveScreen}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopBar
            onMenuClick={() => setSidebarOpen(true)}
            activeScreen={activeScreen}
          />
          
          <main className="flex-1 overflow-y-auto pb-20 lg:pb-0">
            {renderScreen()}
          </main>

          <BottomNav activeScreen={activeScreen} onNavigate={setActiveScreen} />
        </div>
      </div>
    </div>
  );
}