import React, { FC } from 'react';
import { MtgDetailsWrapper } from './MtgDetails.styled';

interface MtgDetailsProps {}

const MtgDetails: FC<MtgDetailsProps> = () => (
 <MtgDetailsWrapper data-testid="MtgDetails">
    MtgDetails Component
 </MtgDetailsWrapper>
);

export default MtgDetails;
