const OnboardLeftSection = ({ title }: { title: string }) => {
  return (
    <div className="relative hidden h-screen select-none flex-col justify-center left-bg bg-blue-600 text-center md:flex md:w-1/2">
      <div className="mx-auto py-16 px-8 text-white xl:w-[40rem]">
        <p className="my-6 text-3xl font-semibold leading-10">{title}</p>
      </div>
    </div>
  );
};

export default OnboardLeftSection;
