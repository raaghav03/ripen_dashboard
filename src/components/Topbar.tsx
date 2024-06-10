
import { OddJobs } from "../assets/icons.tsx"; const Topbar = () => {
    return (
        <div className="border-solid border-b-2 bg-sidebarBG border-sidebar h-fit py-4 w-full px-8">
            <div className="flex flex-row items-center gap-3"> <OddJobs />
                <div className="text-[#131313] text-xl font-medium">  Internal Dashboard</div></div>
        </div>
    );
};

export default Topbar;


