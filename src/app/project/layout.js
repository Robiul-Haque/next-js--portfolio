import ProjectsNavbar from "@/components/ProjectsNavbar";

export default function ProjectLayout({ children }) {
    return (
        <>
            <ProjectsNavbar></ProjectsNavbar>
            {children}
        </>
    )
}