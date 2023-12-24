interface FormHadingProps {
  title: string;
}

const FormHading = ({ title }: FormHadingProps) => {
  return <h4 className="text-xl font-semibold py-3">{title}</h4>;
};

export default FormHading;
