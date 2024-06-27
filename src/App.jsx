import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import PageContent from './components/PageContent';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <div>
      <AppHeader />
      <div className="menuandcontent">
        <SideMenu />
        <PageContent />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
