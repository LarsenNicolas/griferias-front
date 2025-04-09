export default function Footer() {
    return (
        <footer className="p-8 bg-[#a5732db5] dark:bg-[#a5732db5] text-center text-sm text-white dark:text-white">
            © {new Date().getFullYear()} Aethernum - Todos los derechos reservados
        </footer>
    );
}
