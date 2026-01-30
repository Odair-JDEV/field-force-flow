import { Header } from '@/components/Header';
import { TechnicianManager } from '@/components/TechnicianManager';
import { ScheduleSelector } from '@/components/ScheduleSelector';
import { ScheduleEditor } from '@/components/ScheduleEditor';
import { PreviewModal } from '@/components/PreviewModal';
import { useAppStore } from '@/lib/store';

const Index = () => {
  const { currentSchedule } = useAppStore();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 border-r border-border/50 bg-card/30 p-4 space-y-4 overflow-y-auto">
          <TechnicianManager />
          <ScheduleSelector />
          {currentSchedule && <PreviewModal />}
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <ScheduleEditor />
        </main>
      </div>
    </div>
  );
};

export default Index;
