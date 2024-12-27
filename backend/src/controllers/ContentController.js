const Annotations = require('../models/AnnotationData')

module.exports = {

  async update(request, response) {
    const { id } = request.params;
    const { filial, operadora, solicitante, numeroChamado, dataAbertura, servico} = request.body;

    const alteraCampos = await Annotations.findOne({_id : id});

    if(filial || operadora || solicitante || numeroChamado || dataAbertura || servico) {
      alteraCampos.filial = filial; 
      alteraCampos.operadora = operadora;
      alteraCampos.solicitante = solicitante;
      alteraCampos.numeroChamado = numeroChamado;
      alteraCampos.dataAbertura = dataAbertura;
      alteraCampos.servico = servico;

      await alteraCampos.save();
    }

    return response.json(alteraCampos);

  }
  
}