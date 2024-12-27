const Annotations = require("../models/AnnotationData");

module.exports = {
  async read(request, response) {
    const annotationList = await Annotations.find();

    return response.json(annotationList);
  },

  async create(request, response) {
    const { filial, operadora, solicitante, numeroChamado, dataAbertura, servico } =
      request.body;

    if (
      !filial ||
      !operadora ||
      !solicitante ||
      !numeroChamado ||
      !dataAbertura ||
      !servico
    ) {
      return response
        .status(400)
        .json({
          error: "Necessário que todos os campos estejam preenchidos!!!",
        });
    }

    const annotationCreated = await Annotations.create({
      filial,
      operadora,
      solicitante,
      numeroChamado,
      dataAbertura,
      servico
    });
    return response.json(annotationCreated);
  },

  async delete(request, response) {
    const { id } = request.params;

    const annotationDeleted = await Annotations.findOneAndDelete({ _id : id});

    if (annotationDeleted) {
      return response.json(annotationDeleted);
    }

    return response.status(401).json({error: "Não foi encontrado o registro para deletar!"})
  }
};
