const Icon = ({ icons: Icons, className }) => {
  return <>{Icons && <Icons className={className} />}</>;
};

export default Icon;
