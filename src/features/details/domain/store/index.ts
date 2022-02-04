import { getPhotoById } from '../use-cases';
import { createDetailsStore } from './detailsStore/detailsStore';

export const detailStore = createDetailsStore(getPhotoById);
