export default function Footer() {
    return (
        <footer className="p-4 bg-white dark:bg-gray-900 text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Aethernum - Todos los derechos reservados
        </footer>
    );
}
