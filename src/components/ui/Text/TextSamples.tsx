import { Text } from './Text';
import { TextWrapper } from './Text.styled';

// test 13000
export const TextSamples = (): JSX.Element => {
  return (
    <>
      <TextWrapper>
        <Text fontSize={40}>Text text 1</Text>
      </TextWrapper>
      <TextWrapper>
        <Text.Bold fontSize={40}>Text text 2</Text.Bold>
      </TextWrapper>
      <TextWrapper>
        <Text.Gradient fontSize={40} fontWeight={700}>
          Text text 3
        </Text.Gradient>
      </TextWrapper>
      <TextWrapper>
        <Text.Gradient
          fontSize={40}
          fontWeight={700}
          gradient="linear-gradient(45deg, #0B2349 33%, #0D61BC 66%, #8AA9D6)"
        >
          Text text 4
        </Text.Gradient>
      </TextWrapper>
    </>
  );
};
