import React, { useState } from 'react';
// import {Heading} from '@pancakeswap/uikit'
// import { styled } from 'styled-components'
Banner02.propTypes = {

};

// const StyledHeading = styled(Heading)
// `
//   font-size: 2.5rem;
//   color: ${({ theme }) => theme.colors.secondary};

//   ${({ theme }) => theme.mediaQueries.md} {
//     font-size: 4rem;
//   }
// `

function Banner02(props) {
    const [dataBlock] = useState(
        {
            heading: 'Oblivion Draining , drkust0m',
        }
    );
    return (
        <section className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-md-12">
                        <h5 className="heading">{dataBlock.heading}</h5>
                    </div>
                    <div className='wallet' style={{ paddingTop: "3%" }}>
                        <div className="wallet-main">
                            <div className="left">
                                <h6 className="heading"><i className="bx bx-info-circle font-size-16 align-middle me-1"></i>Reminder</h6>
                                <p>If you haven't joined our Telegram channels yet, please join our public channel at @acepanel, our private channel, and our beta chat by clicking this link.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner02;