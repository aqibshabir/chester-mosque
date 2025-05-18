import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Img,
  Container,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';

type ContactFormEmailProps = {
  message: string;
  reason: string;
  name: string;
  senderEmail: string;
};

const reasonLabels: Record<string, string> = {
  general: 'General Enquiry',
  'prayer-times': 'Prayer Times',
  'event-booking': 'Event Booking',
  classes: 'Classes',
  other: 'Other',
};

export default function ContactFormEmail({
  message,
  reason,
  name,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Message from {name}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border border-black my-10 px-10 py-4 rounded-xl">
              <Heading className="leading-tight">
                You recieved the following message from {name}
              </Heading>
              <Text className="font-semibold">Subject: {reasonLabels[reason]}</Text>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
