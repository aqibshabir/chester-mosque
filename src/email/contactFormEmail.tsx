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
              <table
                role="presentation"
                width="100%"
                cellPadding={0}
                cellSpacing={0}
                style={{ borderCollapse: 'collapse' }}
                className="my-6"
              >
                <tbody>
                  <tr>
                    <td width="50" style={{ verticalAlign: 'middle' }}>
                      <Img
                        src="https://raw.githubusercontent.com/aqibshabir/chester-mosque/master/public/logo.png"
                        alt="logo"
                        width={50}
                        height={50}
                        style={{ display: 'block', maxWidth: '50px' }}
                      />
                    </td>
                    <td style={{ paddingLeft: '8px', verticalAlign: 'middle' }}>
                      <Text
                        style={{
                          margin: 0,
                          fontSize: '24px',
                          color: 'rgba(79, 70, 229, 0.9)',
                          fontWeight: 500,
                          lineHeight: 1.2,
                        }}
                      >
                        Chester Mosque
                      </Text>
                      <Text
                        style={{
                          margin: 0,
                          fontSize: '24px',
                          color: 'rgba(0, 0, 0, 0.38)',
                          fontWeight: 100,
                          lineHeight: 1.1,
                        }}
                      >
                        &amp; Islamic Centre
                      </Text>
                    </td>
                  </tr>
                </tbody>
              </table>
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
