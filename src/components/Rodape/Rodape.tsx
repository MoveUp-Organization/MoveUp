
export default function Rodape() {
  return (
    <footer className="bg-white py-6 text-center text-gray-500 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-center items-center">
          <p className="text-sm">
            &copy; MoveUp. Todos os direitos reservados. {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
