import { Outlet } from 'react-router-dom';
import { getCurrentWindow } from '@tauri-apps/api/window';
import Navbar from './Navbar';
import BackgroundTaskRunner from '../common/BackgroundTaskRunner';
import ToastContainer from '../common/ToastContainer';

function Layout() {
    return (
        <div className="h-screen flex flex-col bg-[#FAFBFC] dark:bg-base-300">
            {/* 全局窗口拖拽区域 - 使用 JS 手动触发拖拽，解决 HTML 属性失效问题 */}
            <div
                className="fixed top-0 left-0 right-0 h-9"
                style={{
                    zIndex: 9999,
                    backgroundColor: 'rgba(0,0,0,0.001)',
                    cursor: 'default',
                    userSelect: 'none',
                    WebkitUserSelect: 'none'
                }}
                data-tauri-drag-region
                onMouseDown={() => {
                    getCurrentWindow().startDragging();
                }}
            />
            <BackgroundTaskRunner />
            <ToastContainer />
            <Navbar />
            <main className="flex-1 overflow-hidden flex flex-col relative">
                <Outlet />
            </main>
            <footer className="py-2 text-center text-gray-500 dark:text-gray-400 select-none bg-transparent pointer-events-none mb-1">
                <div className="text-xs font-bold flex items-center justify-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                    <span>Suleiman Alhagami</span>
                    <span className="text-[10px] opacity-30">|</span>
                    <span>سليمان الهجامي</span>
                    <span className="text-[10px] opacity-30">|</span>
                    <span className="font-mono">772006329</span>
                </div>
            </footer>
        </div>
    );
}

export default Layout;
