const BusinessExperienceCard = ({ business }) => {
    return (
        <div className="col-12">
            <div className="card bg-transparent">
                <div className="card-body" >
                    <div className="d-flex justify-content-between align-items-start mb-3">
                        
                        <h5 className="poppins-font text-uppercase">
                            {business.name} <br />
                            <span className="place open-sans-font text-capitalize text-muted" style={{ fontSize: '15px' }}>{business.role}</span>
                        </h5>
                        
                        <span className="time open-sans-font text-uppercase">
                            {business.duration}
                        </span>
                    </div>

                    <p className="mb-3">{business.description}</p>

                    {
                        business.launchDate && (
                            <p className="fw-semibold mb-2">
                                <i className="fa fa-calendar-alt mr-2"></i>
                                Launch : <span className="text-secondary">{business.launchDate}</span>
                            </p>
                        )
                    }

                    {
                        business.status && (
                        <p className="fw-semibold mb-3">
                            Status : <span className={`badge ${business.status === "In Development" ? "badge-warning" : "badge-success"} ms-1`}>{business.status}</span>
                        </p>
                    )}

                    <h6 className="text-uppercase project-subtitle fw-bold mb-2 mt-3">Key Contributions & Achievements</h6>
                    <ol variant="flush" className="mb-4 flex-grow-1">
                        {business.keyContributions.map((contribution, index) => (
                            <li key={index} className="px-0 border-0 d-flex align-items-start py-1">
                                <i className={`${contribution.icon} mr-3 mt-1`} style={{ width: '20px' }}></i>
                                <p className="mb-0 flex-grow-1">{contribution.text}</p>
                            </li>
                        ))}
                    </ol>

                    {business.tags && (
                        <div className="mt-auto pt-3 border-top">
                            {business.tags.map((tag, index) => (
                                <span key={index} className="badge badge-light me-2 mb-2 p-2 border border-secondary fw-normal text-secondary">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BusinessExperienceCard