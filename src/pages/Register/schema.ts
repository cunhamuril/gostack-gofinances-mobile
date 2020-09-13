import * as Yup from 'yup';

export default Yup.object().shape({
  title: Yup.string().required(),
  value: Yup.string().required(),
  category: Yup.string().required(),
});
