import { CloseIcon, Flex, IconButton, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useEffect, useMemo, useRef, useState } from 'react'
import { styled } from 'styled-components'
import 'swiper/css'
import 'swiper/css/effect-fade'

const Container = styled(Flex)`
  overflow: hidden;
  height: 100%;
  padding: 12px;
  align-items: center;
  background: #280d5f;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0px;
    background: #7a6eaa;
    ${({ $background }) => $background && `background: ${$background};`}
  }
`

const InnerContainer = styled(Flex)`
  width: 100%;
  height: 100%;
  align-items: center;
`

const SpeechBubble = styled(Flex)`
  position: relative;
  border-radius: 16px;
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: space-between;

  & ${Text} {
    flex-shrink: 0;
    margin-right: 4px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 800px;
    padding: 8px;
    margin-left: 8px;
    background: #280d5f;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: -7px;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-right: 8px solid #280d5f;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 900px;
  }
`

const AnimationContainer = styled(Flex)`
  width: 100%;
  justify-content: center;
  animation: ${({ $showAnimation }) => ($showAnimation ? `fadeIn 1s linear;` : 'none')};

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const PhishingWarningBanner = () => {
  const [showAnimation, setShowAnimation] = useState(true)
  const [banner, setBanner] = useState({
    background: '#280d5f',
    stripeImage: '',
    stripeImageWidth: '100%',
    stripeImageAlt: '',
    customStyle: {},
    component: () => <Text>Phishing Warning!</Text>,
  })
  const [percentage, setPercentage] = useState(100)
  const [showInBigDevice, setShowInBigDevice] = useState(true)

  const handleClickNext = () => {
    // handle next logic here
  }

  const hideBanner = () => {
    // hide banner logic
  }

  return (
    <Container className="warning-banner" $background={banner.background}>
      <AnimationContainer $showAnimation={showAnimation}>
        <Flex justifyContent="center" alignItems="center">
          {showInBigDevice && (
            <img
              style={banner.customStyle}
              width={banner.stripeImageWidth}
              alt={banner.stripeImageAlt}
              src={banner.stripeImage}
            />
          )}
          <SpeechBubble>
            <InnerContainer>
              <banner.component />
            </InnerContainer>
            {/* <Countdown percentage={percentage} onClick={handleClickNext} /> */}
          </SpeechBubble>
        </Flex>
      </AnimationContainer>
      <IconButton onClick={hideBanner} variant="text">
        <CloseIcon color="#FFFFFF" />
      </IconButton>
    </Container>
  )
}

export default PhishingWarningBanner
