export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section className="min-h-screen flex justify-center items-center">
            {children}
        </section>
    );
}