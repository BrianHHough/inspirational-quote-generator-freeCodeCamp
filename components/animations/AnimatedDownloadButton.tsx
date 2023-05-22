import React from 'react'
import Image from 'next/image'

import lottieJson from '../../assets/animated-photo.json'
import { CenteredLottie, DownloadQuoteCardCon, DownloadQuoteCardConText } from './AnimationElements'

interface AnimatedDownloadButtonProps {
    handleDownload: () => void;
}

const AnimatedDownloadButton = ({handleDownload}: AnimatedDownloadButtonProps) => {
  return (
    <DownloadQuoteCardCon 
        onClick={handleDownload}
    >
        <CenteredLottie
            loop
            animationData={lottieJson}
            play
        />
        <DownloadQuoteCardConText>
            Download your quote card
        </DownloadQuoteCardConText>
    </DownloadQuoteCardCon>
  )
}

export default AnimatedDownloadButton