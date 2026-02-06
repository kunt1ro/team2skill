import { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Courses } from './components/Courses';
import { Surveys } from './components/Surveys';
import { Projects } from './components/Projects';
import { Students } from './components/Students';
import { Reports } from './components/Reports';

type PageType = 'home' | 'courses' | 'surveys' | 'projects' | 'students' | 'reports' | 'settings';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  
  // Handle hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageType;
      if (hash) {
        setCurrentPage(hash);
      }
    };
    
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Dashboard />;
      case 'courses':
        return <Courses />;
      case 'surveys':
        return <Surveys />;
      case 'projects':
        return <Projects />;
      case 'students':
        return <Students />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-semibold mb-2">Настройки</h1>
            <p className="text-muted-foreground mb-6">Конфигурация системы</p>
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <p className="text-muted-foreground">Раздел настроек в разработке</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };
  
  return (
    <Layout currentPage={currentPage}>
      {renderPage()}
    </Layout>
  );
}
