const SectionIndicator = ({ children }) => {
    return (

        <div className='absolute hidden lg:block'>
            <span className="text-cgray text-base font-light text-right absolute right-10">{children}</span>
        </div>
    )
}

export default SectionIndicator;