import axios from "axios";

export const getImgURL = async (image) => {
  const photoFromData = new FormData();
  photoFromData.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`,
    photoFromData
  );
  return data.data.display_url;
};
