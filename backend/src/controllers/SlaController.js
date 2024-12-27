const Annotations = require("../models/AnnotationData");

module.exports = {
  async read(request, response) {
    const sla = request.query;

    const slaEstourado = await Annotations.find(sla);

    return response.json(slaEstourado);
  },

  async update(request, response) {
    const { id } = request.params;

    const annotation = await Annotations.findOne({ _id: id });

    if (annotation.sla) {
      annotation.sla = false;
    } else {
      annotation.sla = true;
    }

    await annotation.save();
    return response.json(annotation);
  },
};
