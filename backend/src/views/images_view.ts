import { Image } from '../models/Images';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://192.168.1.6:3333/uploads/${image.path}`,
      created_at: image.created_at,
      updated_at: image.updated_at,
    };
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  },
};
