function CreateProduct() {
  return (
    <>
      <form>
        <h1>Novo produto</h1>
        <div>
          <input type="text" placeholder="Título" required />
        </div>

        <div>
          <textarea placeholder="Descrição" required />
        </div>

        <div>
          <input type="file" id="image" name="image" accept="image/*" />
        </div>

        <button>Confirmar</button>
        <button>Cancelar</button>
      </form>
    </>
  );
}

export default CreateProduct;
