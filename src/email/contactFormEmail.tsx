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
  senderPhone: string;
  preferredContact: string;
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
  senderPhone,
  preferredContact,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Message from {name}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border border-black my-10 px-10 py-4 rounded-xl">
              <Img
                src="https://raw.githubusercontent.com/aqibshabir/chester-mosque/master/public/logo-with-text.png"
                alt="logo"
                width={192}
                height={54}
                style={{ display: 'block' }}
                className="my-6"
              />
              <Heading className="leading-tight text-lg">
                You recieved the following message from {name}
              </Heading>
              <Text className="font-semibold">Subject: {reasonLabels[reason]}</Text>
              <Text>{message}</Text>
              <Hr />

              <Section className="text-gray-700 space-y-2">
                <Text>
                  <strong>Email:</strong> {senderEmail}
                </Text>
                <Text>
                  <strong>Phone:</strong> {senderPhone}
                </Text>
                <Text>
                  <strong>Preferred Contact:</strong> {preferredContact}
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
