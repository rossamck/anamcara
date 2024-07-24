import React from 'react';
import { Row, Col, Divider, Typography, Space, Card as AntCard } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0 }}
    >
      <Row justify="center" align="middle">
        <Col>
          <Title level={1} className="text-primary mb-2" style={{ textAlign: 'center', fontFamily: 'Palanquin Dark' }}>Welcome to Anam Cara</Title>
        </Col>
      </Row>
      <Divider style={{ margin: '20px 0' }} />
      <Row justify="center" align="middle">
        <Col span={20}>
          <Space direction="vertical" size="large">
            <Title level={2}>What is Listening?</Title>
            <Paragraph>
              All of us have things going on in our lives that affect how we’re feeling – relationship issues, work or money worries, bereavement, health concerns, other significant life changes - but not all of us have a safe place to talk about them with someone we can trust. Listening services provide exactly that kind of space: somewhere you can bring whatever you need to speak about, take things at your own pace and know that you’ll be met with warmth, acceptance and respect in total confidence.
            </Paragraph>
            <Paragraph>
              Somebody once said “How can I know what I’m thinking? I haven’t said it out loud yet!” The simple act of letting your story emerge as you sit with someone who’s genuinely there for you, can, in itself, be a remarkably healing thing to do. As we reflect together on what you bring, we begin to discern what’s important and what can be let go, where your real priorities lie and where change might be possible or necessary. The listener’s job isn’t to ‘fix’ your situation – it’s to help you sift through what’s going on, figure out what really matters to you and find your own ways of moving forward as the person you are.
            </Paragraph>
            <Paragraph>
              Some folk come and get everything off their chest in a single session. Others take longer to get to the heart of things. Both are fine. It’s your life and your story, and you set the pace and agenda for our times together. At Anam Cara, our only agenda is to offer you a confidential listening ear when you really need one.
            </Paragraph>
            <Paragraph>
              This kind of intentional listening has proven benefits, but it’s not to be mistaken for counselling or therapy. While anyone is welcome to come for listening, some circumstances or conditions need specialist help and in those cases we would signpost you to people or agencies who are better equipped to give you the help you need.
            </Paragraph>
          </Space>
        </Col>
      </Row>
      <Divider style={{ margin: '40px 0' }} />
      <Row justify="center" align="middle">
        <Col span={20}>
          <Space direction="vertical" size="large">
            <Title level={2}>What does ‘Anam Cara’ mean?</Title>
            <Paragraph>
              ‘Anam Cara’ is an old Celtic term meaning ‘soul friend’ – someone who just gets you, is there for you and with whom you can be completely yourself. One writer describes an Anam Cara in these terms:
            </Paragraph>
            <ul>
              <li>You can tell them anything. Even the things you don’t want to tell yourself.</li>
              <li>They know your sorrows, joys and insecurities and hold them tenderly.</li>
              <li>A soul friend makes you feel safe and seen in the world.</li>
            </ul>
            <Paragraph>
              At Anam Cara Listening, we aspire to offer that kind of relationship in our consultations – treating our clients with acceptance, empathy, discretion and honesty, whoever they are and whatever they bring.
            </Paragraph>
          </Space>
        </Col>
      </Row>
      <Divider style={{ margin: '40px 0' }} />
      <Row justify="center" align="middle">
        <Col span={20}>
          <Space direction="vertical" size="large">
            <Title level={2}>Who will I be meeting with?</Title>
            <AntCard>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={8}>
                  <img alt="Paul McKeown" src="/assets/paul.jpg" style={{ width: '100%', height: 'auto' }} />
                </Col>
                <Col xs={24} md={16}>
                  <Paragraph>
                    Paul McKeown trained as a listener with NHS Grampian’s Chaplaincy service in 2022 and has served as a volunteer listener under the auspices of Ellon GP practice since then. He completed a COSCA approved Counselling Skills Certificate in May of 2024, augmenting nearly 30 years of pastoral listening in his role as a Church of Scotland minister in Glasgow and the parish of Belhelvie.
                  </Paragraph>
                  <Paragraph>
                    With the closure of the NHS Listening Service in Aberdeenshire due to funding issues, Paul was keen to keep offering this kind of space to people in his parish as he’s seen how much it can help them. As a minister, spirituality is of course close to Paul’s heart, but this service is open to everyone regardless of their beliefs and matters of faith will only be discussed if the client chooses to go there.
                  </Paragraph>
                </Col>
              </Row>
            </AntCard>
          </Space>
        </Col>
      </Row>
      <Divider style={{ margin: '40px 0' }} />
      <Row justify="center" align="middle">
        <Col span={20}>
          <Space direction="vertical" size="large">
            <Title level={2}>What’s the process?</Title>
            <Paragraph>
              If you’re interested in using the listening service we suggest a preliminary meeting of around half an hour with Paul to see if this is the right option for you. This can be a telephone consultation or online meeting via Teams or Zoom.
            </Paragraph>
            <Paragraph>
              If both parties are happy to proceed, and the client is happy to consent to the terms and conditions of the service, we can look at making our first full booking for a 50-minute session. All meetings are held face-to-face in the Quiet Room in The Forsyth Hall Annexe (on the left when you enter through the Annexe door). Consulting hours are alternated every week between daytimes and evenings to ensure that people who work are able to access the service. At this stage of development we are only able to offer listening sessions on Monday mornings between 9-12am, or evenings between 6-9pm.
            </Paragraph>
            <Paragraph>
              At the end of each session we’ll take stock and if appropriate, arrange our next booking. These tend to be three or four weeks apart to allow room for other clients to access the system and to make sure that things have had some time to move on for you between meetings. Our policy is not to take block bookings. Typically, we would meet five or six times over a period of several months.
            </Paragraph>
          </Space>
        </Col>
      </Row>
      <Divider style={{ margin: '40px 0' }} />
      <Row justify="center" align="middle">
        <Col span={20}>
          <Space direction="vertical" size="large">
            <Title level={2}>What does it cost?</Title>
            <Paragraph>
              We want to offer this service to anyone in the community, regardless of whether or not they can afford to pay, so there is no formal charge for these listening sessions. We do, however, hope to build up a fund for the service which will allow us to continue with training of potential new volunteers, continuing professional development, purchase of resources and upkeep of the premises. With that in mind, we encourage clients to make a donation to the service according to their means. (For comparison, a one-hour session with a trained coach or counsellor costs a minimum of £30 but DO NOT BE PUT OFF COMING because of money! We are grateful for whatever you are able to afford to give).
            </Paragraph>
          </Space>
        </Col>
      </Row>
      <Divider style={{ margin: '40px 0' }} />
      <Row justify="center" align="middle">
        <Col span={20}>
          <Space direction="vertical" size="large">
            <Title level={2}>Client Feedback</Title>
            <AntCard>
              <Paragraph>
                “It really helped talking to someone about what’s been going on.” – GF
              </Paragraph>
              <Paragraph>
                “I might be in Glasgow for my next session, but I would travel back for this. It’s making a real difference.” – TS
              </Paragraph>
              <Paragraph>
                “He helped me see things about my own life that I’d never realised before.” – CL
              </Paragraph>
              <Paragraph>
                “I’ve never been listened to me in this way before.” - NN
              </Paragraph>
              <Paragraph>
                “Having somewhere I could be open about what I was going through without being judged for it was so reassuring.” GS
              </Paragraph>
              <Paragraph>
                “At a time in my life when I was struggling it was suggested that I make use of the listening service. I was apprehensive at first but was met with understanding and reassurance and immediately felt at ease with Paul. It was very constructive having someone to listen to you without judging you in any way and over several sessions I became more able to cope with my anxieties and the pressures that life was throwing at me. I’ve become a much stronger person and I’ve seen my confidence and self-worth grow throughout these sessions. Problems in life can’t always be resolved, but I now know that I have the inner resources to cope with them better. I’d strongly encourage anyone who finds themselves in need of a listening ear to consider getting in touch with Anam Cara. Paul has a genuine and warm manner and his support has really helped me turn things around.”  WM
              </Paragraph>
            </AntCard>
          </Space>
        </Col>
      </Row>
      <Divider style={{ margin: '40px 0' }} />
      <Row justify="center" align="middle">
        <Col span={20}>
          <Space direction="vertical" size="large">
            <Title level={2}>Contact Details</Title>
            <Paragraph>
              Paul McKeown – 01358742227, anamcaralistening@gmail.com
            </Paragraph>
          </Space>
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col span={20}>
          <AntCard
            cover={<img alt="Location of Room and Hall" src={"/assets/flier.jpg"} />}
          />
        </Col>
      </Row>
    </motion.div>
  );
}

export default Home;
