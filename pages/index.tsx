/* eslint-disable */
'use client';

import React from 'react';
import Head from 'next/head';
import {
  Layout,
  Menu,
  Typography,
  Card,
  Table,
  Row,
  Col,
  Button,
  Space,
  Divider,
  ConfigProvider,
} from 'antd';

const { Title, Paragraph, Text } = Typography;
const { Header, Content, Footer } = Layout;

export default function PrivacyPolicyFull() {
  // --- NAVIGATION MENU (With custom icon placeholders) ---
  const menuItems = [
    {
      key: 'scope',
      icon: <img src="/icons/scope.svg" alt="Icon" width={16} height={16} />,
      label: 'Scope of This Policy',
    },
    {
      key: 'hipaa',
      icon: <img src="/icons/hipaa.svg" alt="Icon" width={16} height={16} />,
      label: 'HIPAA and PHI',
    },
    {
      key: 'data-handling',
      icon: (
        <img src="/icons/data-handling.svg" alt="Icon" width={16} height={16} />
      ),
      label: 'Healthcare Data Handling',
    },
    {
      key: 'your-rights',
      icon: (
        <img src="/icons/your-rights.svg" alt="Icon" width={16} height={16} />
      ),
      label: 'Your Rights',
    },
    {
      key: 'collect',
      icon: <img src="/icons/collect.svg" alt="Icon" width={16} height={16} />,
      label: 'Data We Collect',
    },
    {
      key: 'security',
      icon: <img src="/icons/security.svg" alt="Icon" width={16} height={16} />,
      label: 'Data Security',
    },
    {
      key: 'retention',
      icon: (
        <img src="/icons/retention.svg" alt="Icon" width={16} height={16} />
      ),
      label: 'Data Retention',
    },
    {
      key: 'california',
      icon: (
        <img src="/icons/california.svg" alt="Icon" width={16} height={16} />
      ),
      label: 'California Rights',
    },
    {
      key: 'exercising-rights',
      icon: (
        <img
          src="/icons/exercising-rights.svg"
          alt="Icon"
          width={16}
          height={16}
        />
      ),
      label: 'Exercising Your Rights',
    },
    {
      key: 'contact',
      icon: <img src="/icons/contact.svg" alt="Icon" width={16} height={16} />,
      label: 'Contact Information',
    },
  ];

  // --- TABLE DATA ---
  const tableColumns = [
    {
      title: 'Category & Examples',
      dataIndex: 'category',
      key: 'category',
      width: '25%',
    },
    {
      title: 'Source of Data',
      dataIndex: 'source',
      key: 'source',
      width: '25%',
    },
    {
      title: 'Business Purpose',
      dataIndex: 'purpose',
      key: 'purpose',
      width: '25%',
    },
    {
      title: 'Third Parties Disclosed To',
      dataIndex: 'thirdParties',
      key: 'thirdParties',
      width: '25%',
    },
  ];

  const visitorsData = [
    {
      key: '1',
      category:
        'Online Identifiers (IP Address, Location Data, Device ID, Browser Type)',
      source: 'You, Third Parties',
      purpose: 'Providing, Customizing, And Improving The Services; Marketing',
      thirdParties:
        'Service Providers, Analytics, Ad Networks, Authorized Parties',
    },
    {
      key: '2',
      category:
        'Web Analytics (Webpage Interactions, Referring Page, Request IDs)',
      source: 'You, Third Parties',
      purpose: 'Providing, Customizing, And Improving The Services; Marketing',
      thirdParties:
        'Service Providers, Analytics, Ad Networks, Authorized Parties',
    },
    {
      key: '3',
      category: 'User Demographic Data (Gender, Date Of Birth)',
      source: 'You',
      purpose:
        'Providing, Customizing, And Improving The Services; Correspondence',
      thirdParties:
        'Service Providers, Healthcare Providers, HIEs, Ad Networks',
    },
    {
      key: '4',
      category: 'Geolocation Data (Zip Code, City, Address)',
      source: 'You, Third Parties',
      purpose: 'Providing, Customizing, And Improving The Services; Marketing',
      thirdParties:
        'Service Providers, Analytics, Ad Networks, Authorized Parties',
    },
  ];

  const usersData = [
    {
      key: '1',
      category: 'Personal Identifiers (Name, Email, Phone, Mailing Address)',
      source: 'You',
      purpose: 'Providing, Customizing, Improving The Services; Correspondence',
      thirdParties:
        'Service Providers, Healthcare Providers, Insurance Providers, HIEs',
    },
    {
      key: '2',
      category:
        'Commercial Information (Payment Card Type, Last Four Digits, Billing Contact)',
      source: 'You',
      purpose: 'Providing, Customizing, And Improving The Services',
      thirdParties: 'Service Providers (E.G., Stripe)',
    },
    {
      key: '3',
      category: 'Booking Appointment Data (Date/Time, Provider, Procedure)',
      source: 'You, Third Parties',
      purpose: 'Providing, Customizing, And Improving The Services',
      thirdParties: 'Service Providers, Analytics, Healthcare Providers, HIEs',
    },
    {
      key: '4',
      category:
        'Health & Insurance Information (Conditions, History, Insurance Plan, Member ID)',
      source: 'You',
      purpose: 'Providing, Customizing, And Improving The Services',
      thirdParties:
        'Service Providers, Healthcare Providers, Insurance Providers, HIEs',
    },
  ];

  const providersData = [
    {
      key: '1',
      category:
        'Professional Identifiers (NPI, DEA Number, State License, Specialties)',
      source: 'You, Third Parties (NPPES, Boards)',
      purpose: 'Verifying Credentials; Displaying Provider Profiles',
      thirdParties: 'Service Providers, Credentialing Agencies, HIEs',
    },
    {
      key: '2',
      category:
        'Credentialing Data (Malpractice History, Hospital Privileges, Education)',
      source: 'You, Third Parties',
      purpose: 'Verifying Eligibility; Maintaining Platform Integrity',
      thirdParties:
        'Service Providers, Credentialing Agencies, Insurance Providers',
    },
    {
      key: '3',
      category:
        'Billing & RCM Data (Tax ID, Banking Info, Claims Data, Fee Schedules)',
      source: 'You, Third Parties',
      purpose: 'Processing Payments, Reimbursements, And Billing',
      thirdParties:
        'Service Providers, Payment Processors, Insurance Providers',
    },
  ];

  return (
    <ConfigProvider
      theme={{ token: { fontFamily: "'Montserrat', sans-serif" } }}
    >
      {/* 1. Inject Montserrat via standard HTML link in the Next.js Head */}
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Layout
        style={{
          minHeight: '100vh',
          backgroundColor: '#f9fafc',
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        {/* TOP NAVIGATION */}
        <Header
          style={{
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 5%',
            borderBottom: '1px solid #eaeaea',
            height: '80px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Header Logo Placeholder */}
            <img src="icons/logo-dark.svg" alt="DocHyve Logo" height={32} />
          </div>

          {/* Note: React inline styles do not support Media Queries. 
              Usually handled via CSS classes or conditional rendering in React */}
          <Space
            size="large"
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Text
              style={{ cursor: 'pointer', color: '#102e7a', fontWeight: 600 }}
            >
              Home
            </Text>
            <Text style={{ cursor: 'pointer', fontWeight: 500 }}>
              Specialties ⌄
            </Text>
            <Text style={{ cursor: 'pointer', fontWeight: 500 }}>
              List your practice on DocHyve
            </Text>
            <Text style={{ cursor: 'pointer', fontWeight: 500 }}>Help</Text>
            <Button
              style={{
                borderRadius: '24px',
                color: '#102e7a',
                borderColor: '#102e7a',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <img
                src="/icons/provider.svg"
                alt="Provider"
                width={16}
                height={16}
              />{' '}
              For Providers
            </Button>
            <Text style={{ cursor: 'pointer', fontWeight: 600 }}>
              Sign up / Login
            </Text>
          </Space>
        </Header>

        {/* HERO SECTION */}
        <div
          style={{
            backgroundColor: '#eef2fb',
            padding: '0px 10%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ maxWidth: '600px' }}>
            <Text
              style={{
                color: '#5b82ce',
                fontWeight: 700,
                fontSize: '16px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              DocHyve Policies
            </Text>
            <Title
              level={1}
              style={{
                color: '#102e7a',
                marginTop: '8px',
                fontSize: '56px',
                fontWeight: 800,
              }}
            >
              Privacy Policy
            </Title>
            <Paragraph
              style={{ color: '#4b5563', fontSize: '18px', lineHeight: '1.6' }}
            >
              Your privacy is important to us. Learn how we collect, use, and
              protect your personal information.
            </Paragraph>
          </div>
          {/* Hero Illustration Placeholder */}
          <div
            style={{
              width: '400px',
              height: '500px',
              backgroundImage: 'url("/images/hero-illustration.svg")',
              backgroundSize: '500px',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>

        {/* MAIN CONTENT AREA */}
        <Content
          style={{
            padding: '60px 10%',
            display: 'flex',
            gap: '40px',
            alignItems: 'flex-start',
          }}
        >
          {/* STICKY SIDEBAR */}
          <div
            style={{
              width: '300px',
              flexShrink: 0,
              position: 'sticky',
              top: '24px',
            }}
          >
            <div
              style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '24px 0',
                border: '1px solid #eaeaea',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
              }}
            >
              <span
                style={{
                  paddingLeft: '24px',
                  marginBottom: '16px',
                  display: 'block',
                  color: '#102e7a',
                  fontWeight: 800,
                  fontSize: '14px',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
              >
                TABLE OF CONTENTS
              </span>
              <Menu
                mode="inline"
                defaultSelectedKeys={['scope']}
                style={{ borderRight: 0, fontWeight: 500 }}
                items={menuItems}
              />
            </div>
          </div>

          {/* CONTENT CARDS */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
            }}
          >
            {/* Section 1: Scope */}
            <Card
              id="scope"
              style={{ borderRadius: '12px', border: '1px solid #eaeaea' }}
              styles={{ body: { padding: '40px' } }}
            >
              <Title
                level={3}
                style={{
                  color: '#102e7a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginTop: 0,
                  fontWeight: 700,
                }}
              >
                <img
                  src="/icons/scope-large.svg"
                  alt="Icon"
                  width={24}
                  height={24}
                />{' '}
                Scope Of This Policy
                <hr />
              </Title>
              <Paragraph
                style={{
                  fontSize: '16px',
                  color: '#4b5563',
                  lineHeight: '1.7',
                }}
              >
                At DocHyve ("DocHyve," "we," "us," or "our"), your privacy is a
                top priority. This Privacy Policy explains how we collect, use,
                and safeguard your personal information when you use our
                service-based websites and applications (Collectively, the
                "Services").
              </Paragraph>
              <Paragraph style={{ fontSize: '16px', color: '#4b5563' }}>
                This Privacy Policy applies to:
              </Paragraph>
              <ul
                style={{
                  fontSize: '16px',
                  color: '#4b5563',
                  paddingLeft: '24px',
                  lineHeight: '1.7',
                }}
              >
                <li style={{ marginBottom: '8px' }}>
                  Users who create a DocHyve account to utilize our Services.
                </li>
                <li>
                  Visitors who access our Services without creating any account.
                </li>
              </ul>

              <div
                style={{
                  backgroundColor: '#fffbe6',
                  padding: '20px',
                  borderRadius: '8px',
                  borderLeft: '4px solid #faad14',
                  margin: '24px 0',
                }}
              >
                <Text
                  style={{
                    color: '#4b5563',
                    fontSize: '15px',
                    lineHeight: '1.6',
                  }}
                >
                  <strong>Note:</strong> Some features of our Services, such as
                  booking appointments, are only available to Users with a
                  DocHyve account. For healthcare providers (doctors, dentists,
                  and others) using our marketing services, see Information We
                  Collect for Providers for details.
                </Text>
              </div>

              <Title
                level={4}
                style={{ color: '#102e7a', marginTop: '32px', fontWeight: 700 }}
              >
                Your Consent
              </Title>
              <Paragraph style={{ fontSize: '16px', color: '#4b5563' }}>
                By using or accessing our Services, you agree to:
              </Paragraph>
              <ul
                style={{
                  listStyleType: 'none',
                  paddingLeft: 0,
                  fontSize: '16px',
                  color: '#4b5563',
                }}
              >
                <li
                  style={{
                    marginBottom: '12px',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                  }}
                >
                  <img
                    src="/icons/check-blue.svg"
                    alt="Check"
                    width={20}
                    height={20}
                    style={{ marginTop: '4px' }}
                  />
                  <span>
                    The collection, use, and sharing of your information as
                    described in this Privacy Policy.
                  </span>
                </li>
                <li
                  style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                  }}
                >
                  <img
                    src="/icons/check-blue.svg"
                    alt="Check"
                    width={20}
                    height={20}
                    style={{ marginTop: '4px' }}
                  />
                  <span>
                    Our Terms of Use, which incorporates this Privacy Policy
                    (the "Agreement").
                  </span>
                </li>
              </ul>
              <Paragraph
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#111827',
                  marginTop: '24px',
                }}
              >
                Important: If you do not agree with this Privacy Policy, please
                do not use the Services. If using the Services on behalf of
                someone else (e.g., your child), you confirm that you are
                authorized to accept this Privacy Policy on their behalf.
              </Paragraph>
            </Card>

            {/* Section 2: HIPAA */}
            <Card
              id="hipaa"
              style={{ borderRadius: '12px', border: '1px solid #eaeaea' }}
              styles={{ body: { padding: '40px' } }}
            >
              <Title
                level={3}
                style={{
                  color: '#102e7a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginTop: 0,
                  fontWeight: 700,
                }}
              >
                <img
                  src="/icons/hipaa-large.svg"
                  alt="Icon"
                  width={24}
                  height={24}
                />{' '}
                HIPAA & Protected Health Information (PHI)
              </Title>
              <Paragraph style={{ fontSize: '16px', color: '#4b5563' }}>
                This typically applies when all of the following are true:
              </Paragraph>
              <ul
                style={{
                  fontSize: '16px',
                  color: '#4b5563',
                  paddingLeft: '24px',
                  lineHeight: '1.7',
                }}
              >
                <li style={{ marginBottom: '8px' }}>
                  <strong>DocHyve</strong> provides administrative, operational,
                  or other services to a Healthcare Provider that is a Covered
                  Entity under <strong>HIPAA</strong>.
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <strong>DocHyve</strong> receives identifiable information
                  about a User while acting as a Business Associate of the
                  Healthcare Provider.
                </li>
                <li>The information received is regulated as PHI.</li>
              </ul>

              <Title
                level={4}
                style={{ color: '#102e7a', marginTop: '32px', fontWeight: 700 }}
              >
                PHI Is Governed By HIPAA:
              </Title>
              <ul
                style={{
                  fontSize: '16px',
                  color: '#4b5563',
                  paddingLeft: '24px',
                  lineHeight: '1.7',
                }}
              >
                <li style={{ marginBottom: '8px' }}>
                  This Privacy Policy does <strong>not</strong> apply to PHI.
                </li>
                <li>
                  HIPAA sets specific rules for the privacy and security of PHI,
                  including limitations on its use and disclosure. To understand
                  how your PHI can be used or shared, please review the Notice
                  of Privacy Practices provided by your Healthcare Provider.
                </li>
              </ul>

              <Title
                level={4}
                style={{ color: '#102e7a', marginTop: '32px', fontWeight: 700 }}
              >
                When DocHyve Collects Personal Data That Is Not PHI:
              </Title>
              <Paragraph style={{ fontSize: '16px', color: '#4b5563' }}>
                Personal data collected by DocHyve outside of its role as a
                Business Associate is not PHI and is covered by this Privacy
                Policy.
              </Paragraph>
              <Text
                type="secondary"
                style={{
                  fontSize: '14px',
                  display: 'block',
                  marginTop: '16px',
                }}
              >
                Examples include when you:
              </Text>
              <ul
                style={{
                  fontSize: '15px',
                  color: '#6b7280',
                  paddingLeft: '24px',
                  marginTop: '8px',
                  lineHeight: '1.7',
                }}
              >
                <li>Create a DocHyve account.</li>
                <li>
                  Search for Healthcare Providers or available appointments.
                </li>
                <li>Post reviews or feedback.</li>
                <li>
                  Provide device/IP information or web analytics by browsing our
                  websites.
                </li>
                <li>
                  Direct your healthcare provider to disclose PHI to DocHyve
                  outside of its Business Associate capacity.
                </li>
              </ul>
            </Card>

            {/* Section 3: Data Handling */}
            <Card
              id="data-handling"
              style={{ borderRadius: '12px', border: '1px solid #eaeaea' }}
              styles={{ body: { padding: '40px' } }}
            >
              <Title
                level={3}
                style={{
                  color: '#102e7a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginTop: 0,
                  fontWeight: 700,
                }}
              >
                <img
                  src="/icons/data-handling-large.svg"
                  alt="Icon"
                  width={24}
                  height={24}
                />{' '}
                Healthcare Data Handling
              </Title>
              <Title
                level={4}
                style={{ color: '#111827', marginTop: '24px', fontWeight: 700 }}
              >
                What Qualifies As Healthcare Data
              </Title>
              <Paragraph
                style={{
                  fontSize: '16px',
                  color: '#4b5563',
                  marginBottom: '24px',
                }}
              >
                In addition to PHI governed by HIPAA, DocHyve may collect,
                process, and store broader healthcare-related data, including:
              </Paragraph>

              <Row gutter={[16, 16]}>
                {[
                  {
                    title: 'Appointment Booking Information',
                    desc: 'e.g., provider selected, date, time, procedure type.',
                  },
                  {
                    title: 'Health Conditions',
                    desc: 'symptoms, reasons for visit, and medical history.',
                  },
                  {
                    title: 'Health Insurance Information',
                    desc: 'e.g., plan name, member ID, group ID',
                  },
                  {
                    title: 'Prescription & Treatment-Related Information',
                    desc: 'you choose to share.',
                  },
                  {
                    title: 'Sensitive Demographic Data',
                    desc: 'with health relevance (e.g., gender identity)',
                  },
                  {
                    title: 'Provider Credentialing And Clinical Information.',
                    desc: '',
                  },
                ].map((box, idx) => (
                  <Col span={12} key={idx}>
                    <div
                      style={{
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        padding: '20px',
                        textAlign: 'center',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}
                    >
                      <Text strong style={{ fontSize: '15px' }}>
                        {box.title}
                      </Text>
                      {box.desc && (
                        <Text
                          type="secondary"
                          style={{ fontSize: '13px', marginTop: '8px' }}
                        >
                          {box.desc}
                        </Text>
                      )}
                    </div>
                  </Col>
                ))}
              </Row>

              <Title
                level={4}
                style={{ color: '#111827', marginTop: '40px', fontWeight: 700 }}
              >
                How Healthcare Data Is Shared?
              </Title>
              <Paragraph style={{ fontSize: '16px', color: '#4b5563' }}>
                DocHyve shares healthcare-related data only in the following
                circumstances:
              </Paragraph>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: '100%', marginTop: '16px' }}
              >
                {[
                  {
                    num: '1',
                    title: 'With Healthcare Providers',
                    desc: 'you select to facilitate appointment booking and care.',
                  },
                  {
                    num: '2',
                    title: 'With Insurance Providers',
                    desc: 'solely to verify eligibility and benefits.',
                  },
                  {
                    num: '3',
                    title: 'With Health Information Exchanges (HIEs)',
                    desc: 'to improve the accessibility and quality of care.',
                  },
                  {
                    num: '4',
                    title: 'With Service Providers',
                    desc: 'assisting us in operations (under strict contractual obligations).',
                  },
                  {
                    num: '5',
                    title: 'With Other Parties',
                    desc: 'only with your explicit authorization.',
                  },
                  {
                    num: '6',
                    title: 'As Required by Law',
                    desc: '(court orders, subpoenas).',
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    style={{
                      display: 'flex',
                      gap: '16px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: '#f59e0b',
                        color: '#fff',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: 'bold',
                        flexShrink: 0,
                        fontSize: '16px',
                      }}
                    >
                      {item.num}
                    </div>
                    <div style={{ marginTop: '4px' }}>
                      <Text strong style={{ fontSize: '16px' }}>
                        {item.title}
                      </Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: '15px' }}>
                        {item.desc}
                      </Text>
                    </div>
                  </div>
                ))}
              </Space>

              <div
                style={{
                  backgroundColor: '#f9fafb',
                  padding: '20px',
                  borderRadius: '8px',
                  borderLeft: '4px solid #10b981',
                  marginTop: '32px',
                }}
              >
                <Text style={{ fontSize: '15px', color: '#4b5563' }}>
                  <strong>Strict No-Sell Policy:</strong> DocHyve does not sell
                  or share your healthcare-related data with advertisers, ad
                  networks, or marketing partners.
                </Text>
              </div>
            </Card>

            {/* Section 4: Your Rights */}
            <Card
              id="your-rights"
              style={{ borderRadius: '12px', border: '1px solid #eaeaea' }}
              styles={{ body: { padding: '40px' } }}
            >
              <Title
                level={3}
                style={{
                  color: '#102e7a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginTop: 0,
                  fontWeight: 700,
                }}
              >
                <img
                  src="/icons/your-rights-large.svg"
                  alt="Icon"
                  width={24}
                  height={24}
                />{' '}
                Your Rights As A DocHyve User
              </Title>
              <Paragraph
                style={{
                  fontSize: '16px',
                  color: '#4b5563',
                  marginBottom: '24px',
                }}
              >
                Regardless of where you live, you have the following core rights
                with respect to the Personal Data we hold about you:
              </Paragraph>
              <Space
                direction="vertical"
                size="large"
                style={{ width: '100%' }}
              >
                {[
                  {
                    num: '1',
                    title: 'Right to Access',
                    desc: 'Know what Personal Data we hold, the sources, the business purposes, and the third parties with whom we share it.',
                  },
                  {
                    num: '2',
                    title: 'Right to Correction',
                    desc: 'Request that we correct any inaccurate or incomplete Personal Data.',
                  },
                  {
                    num: '3',
                    title: 'Right to Deletion',
                    desc: 'Request that we delete the Personal Data we hold about you from our active systems.',
                  },
                  {
                    num: '4',
                    title: 'Right to Data Portability',
                    desc: 'Receive a copy of your Personal Data in a structured, commonly used, and machine-readable format.',
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    style={{
                      display: 'flex',
                      gap: '16px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: '#f59e0b',
                        color: '#fff',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: 'bold',
                        flexShrink: 0,
                        fontSize: '16px',
                      }}
                    >
                      {item.num}
                    </div>
                    <div style={{ marginTop: '4px' }}>
                      <Text strong style={{ fontSize: '16px' }}>
                        {item.title}
                      </Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: '15px' }}>
                        {item.desc}
                      </Text>
                    </div>
                  </div>
                ))}
              </Space>
              <div
                style={{
                  backgroundColor: '#fffbe6',
                  padding: '20px',
                  borderRadius: '8px',
                  borderLeft: '4px solid #faad14',
                  marginTop: '32px',
                }}
              >
                <Text style={{ color: '#4b5563', fontSize: '15px' }}>
                  We will <strong>respond</strong> to all valid requests within
                  the time-frame required by applicable law (usually within 45
                  days).
                </Text>
              </div>
            </Card>

            {/* Section 5: Data We Collect */}
            <Card
              id="collect"
              style={{ borderRadius: '12px', border: '1px solid #eaeaea' }}
              styles={{ body: { padding: '40px' } }}
            >
              <Title
                level={3}
                style={{
                  color: '#102e7a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginTop: 0,
                  fontWeight: 700,
                }}
              >
                <img
                  src="/icons/collect-large.svg"
                  alt="Icon"
                  width={24}
                  height={24}
                />{' '}
                Data We Collect
              </Title>

              <Title
                level={4}
                style={{
                  color: '#111827',
                  marginTop: '32px',
                  marginBottom: '16px',
                  fontWeight: 700,
                }}
              >
                1. Visitors And Users
              </Title>
              <Table
                columns={tableColumns}
                dataSource={visitorsData}
                pagination={false}
                bordered
                size="middle"
              />

              <Title
                level={4}
                style={{
                  color: '#111827',
                  marginTop: '40px',
                  marginBottom: '16px',
                  fontWeight: 700,
                }}
              >
                2. Users Only (Account Holders)
              </Title>
              <Table
                columns={tableColumns}
                dataSource={usersData}
                pagination={false}
                bordered
                size="middle"
              />

              <Title
                level={4}
                style={{
                  color: '#111827',
                  marginTop: '40px',
                  marginBottom: '16px',
                  fontWeight: 700,
                }}
              >
                3. Healthcare Providers Only
              </Title>
              <Table
                columns={tableColumns}
                dataSource={providersData}
                pagination={false}
                bordered
                size="middle"
              />
            </Card>

            {/* Section 6: Data Security */}
            <Card
              id="security"
              style={{ borderRadius: '12px', border: '1px solid #eaeaea' }}
              styles={{ body: { padding: '40px' } }}
            >
              <Title
                level={3}
                style={{
                  color: '#102e7a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginTop: 0,
                  fontWeight: 700,
                }}
              >
                <img
                  src="/icons/security-large.svg"
                  alt="Icon"
                  width={24}
                  height={24}
                />{' '}
                Data Security
              </Title>
              <Paragraph
                style={{
                  fontSize: '16px',
                  color: '#4b5563',
                  marginBottom: '24px',
                }}
              >
                DocHyve's security practices are designed to meet or exceed the
                standards expected under HIPAA, HITECH, and applicable state
                data security laws.
              </Paragraph>
              <Space
                direction="vertical"
                size="large"
                style={{ width: '100%' }}
              >
                {[
                  {
                    num: '1',
                    title: 'Encryption',
                    desc: 'All data in transit is encrypted using TLS 1.2+. All data at rest is encrypted using AES-256 encryption.',
                  },
                  {
                    num: '2',
                    title: 'Access Controls',
                    desc: 'Role-Based Access Control (RBAC) ensures least privilege access. Multi-Factor Authentication (MFA) is strictly enforced for system access.',
                  },
                  {
                    num: '3',
                    title: 'Monitoring & Detection',
                    desc: 'Continuous security monitoring, Intrusion Detection/Prevention Systems (IDS/IPS), and regular vulnerability testing.',
                  },
                  {
                    num: '4',
                    title: 'Physical Security',
                    desc: 'Data is hosted in SOC 2 Type II certified facilities with 24/7 surveillance and biometric access controls.',
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    style={{
                      display: 'flex',
                      gap: '16px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: '#f59e0b',
                        color: '#fff',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: 'bold',
                        flexShrink: 0,
                        fontSize: '16px',
                      }}
                    >
                      {item.num}
                    </div>
                    <div style={{ marginTop: '4px' }}>
                      <Text strong style={{ fontSize: '16px' }}>
                        {item.title}
                      </Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: '15px' }}>
                        {item.desc}
                      </Text>
                    </div>
                  </div>
                ))}
              </Space>
            </Card>

            {/* Section 7: Data Retention */}
            <Card
              id="retention"
              style={{ borderRadius: '12px', border: '1px solid #eaeaea' }}
              styles={{ body: { padding: '40px' } }}
            >
              <Title
                level={3}
                style={{
                  color: '#102e7a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginTop: 0,
                  fontWeight: 700,
                }}
              >
                <img
                  src="/icons/retention-large.svg"
                  alt="Icon"
                  width={24}
                  height={24}
                />{' '}
                Data Retention
              </Title>
              <Paragraph
                style={{
                  fontSize: '16px',
                  color: '#4b5563',
                  marginBottom: '24px',
                }}
              >
                DocHyve retains your Personal Data only for as long as
                necessary.
              </Paragraph>
              <Space
                direction="vertical"
                size="large"
                style={{ width: '100%' }}
              >
                {[
                  {
                    num: '1',
                    title: 'Account Data',
                    desc: 'Retained for the duration of your account. Inactive accounts (36 months) are flagged for review and deletion.',
                  },
                  {
                    num: '2',
                    title: 'Healthcare & Clinical Data',
                    desc: 'Medical records and health info retained for a minimum of 7 years (or up to age 18 + 7 years for minors).',
                  },
                  {
                    num: '3',
                    title: 'Financial & Payment Data',
                    desc: 'Retained for 7 years consistent with IRS requirements.',
                  },
                  {
                    num: '4',
                    title: 'Platform Usage Data',
                    desc: 'Web analytics retained for 24 months before aggregation/anonymization.',
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    style={{
                      display: 'flex',
                      gap: '16px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: '#f59e0b',
                        color: '#fff',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: 'bold',
                        flexShrink: 0,
                        fontSize: '16px',
                      }}
                    >
                      {item.num}
                    </div>
                    <div style={{ marginTop: '4px' }}>
                      <Text strong style={{ fontSize: '16px' }}>
                        {item.title}
                      </Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: '15px' }}>
                        {item.desc}
                      </Text>
                    </div>
                  </div>
                ))}
              </Space>
            </Card>

            {/* Section 8: California Rights */}
            <Card
              id="california"
              style={{ borderRadius: '12px', border: '1px solid #eaeaea' }}
              styles={{ body: { padding: '40px' } }}
            >
              <Title
                level={3}
                style={{
                  color: '#102e7a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginTop: 0,
                  fontWeight: 700,
                }}
              >
                <img
                  src="/icons/california-large.svg"
                  alt="Icon"
                  width={24}
                  height={24}
                />{' '}
                California Rights And Disclosures
              </Title>
              <Paragraph
                style={{
                  fontSize: '16px',
                  color: '#4b5563',
                  marginBottom: '24px',
                }}
              >
                Under the CCPA, California residents have specific rights
                regarding their data. While DocHyve does not sell Users'
                information for money, we do share Cookies for cross-contextual
                behavioral advertising.
              </Paragraph>
              <Space
                direction="vertical"
                size="large"
                style={{ width: '100%' }}
              >
                {[
                  {
                    num: '1',
                    title: 'Financial Incentives',
                    desc: 'We may offer financial incentives for your participation in user research. Participation is entirely optional.',
                  },
                  {
                    num: '2',
                    title: 'Non-Discrimination',
                    desc: 'We will not discriminate against you for exercising your CCPA rights.',
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    style={{
                      display: 'flex',
                      gap: '16px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: '#f59e0b',
                        color: '#fff',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: 'bold',
                        flexShrink: 0,
                        fontSize: '16px',
                      }}
                    >
                      {item.num}
                    </div>
                    <div style={{ marginTop: '4px' }}>
                      <Text strong style={{ fontSize: '16px' }}>
                        {item.title}
                      </Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: '15px' }}>
                        {item.desc}
                      </Text>
                    </div>
                  </div>
                ))}
              </Space>
            </Card>

            {/* Section 9: Exercising Your Rights */}
            <Card
              id="exercising-rights"
              style={{ borderRadius: '12px', border: '1px solid #eaeaea' }}
              styles={{ body: { padding: '40px' } }}
            >
              <Title
                level={3}
                style={{
                  color: '#102e7a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginTop: 0,
                  fontWeight: 700,
                }}
              >
                <img
                  src="/icons/exercising-rights-large.svg"
                  alt="Icon"
                  width={24}
                  height={24}
                />{' '}
                Exercising Your Rights
              </Title>
              <Paragraph
                style={{
                  fontSize: '16px',
                  color: '#4b5563',
                  marginBottom: '24px',
                }}
              >
                To exercise your privacy rights under the CCPA or other state
                laws, you can submit a "Valid Request" that provides enough
                information to verify your identity.
              </Paragraph>
              <Title level={4} style={{ color: '#111827', fontWeight: 700 }}>
                How To Submit:
              </Title>
              <ul
                style={{
                  listStyleType: 'none',
                  paddingLeft: 0,
                  fontSize: '16px',
                  color: '#4b5563',
                }}
              >
                <li
                  style={{
                    marginBottom: '12px',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                  }}
                >
                  <img
                    src="/icons/bullet-blue.svg"
                    alt="Bullet"
                    width={16}
                    height={16}
                    style={{ marginTop: '4px' }}
                  />
                  <span>
                    <strong>DocHyve Account Holders:</strong> Access, delete, or
                    correct your personal data via the "Privacy" tab in account
                    settings.
                  </span>
                </li>
                <li
                  style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                  }}
                >
                  <img
                    src="/icons/bullet-gold.svg"
                    alt="Bullet"
                    width={16}
                    height={16}
                    style={{ marginTop: '4px' }}
                  />
                  <span>
                    <strong>All Users:</strong> Opt out of targeted advertising
                    by visiting "Your Privacy Choices" at the bottom of our
                    website.
                  </span>
                </li>
              </ul>
            </Card>

            {/* Section 10: Contact Information */}
            <Card
              id="contact"
              style={{ borderRadius: '12px', border: '1px solid #eaeaea' }}
              styles={{ body: { padding: '40px' } }}
            >
              <Title
                level={3}
                style={{
                  color: '#102e7a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginTop: 0,
                  fontWeight: 700,
                }}
              >
                <img
                  src="/icons/contact-large.svg"
                  alt="Icon"
                  width={24}
                  height={24}
                />{' '}
                Contact Information
              </Title>
              <Paragraph style={{ fontSize: '16px', color: '#4b5563' }}>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy, please contact us:
              </Paragraph>
              <ul
                style={{
                  listStyleType: 'none',
                  paddingLeft: 0,
                  fontSize: '16px',
                  color: '#4b5563',
                }}
              >
                <li
                  style={{
                    marginBottom: '16px',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src="/icons/bullet-blue.svg"
                    alt="Bullet"
                    width={12}
                    height={12}
                  />
                  <span>
                    <strong>Email:</strong> info@dochyve.com
                  </span>
                </li>
                <li
                  style={{
                    marginBottom: '16px',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src="/icons/bullet-blue.svg"
                    alt="Bullet"
                    width={12}
                    height={12}
                  />
                  <span>
                    <strong>Phone:</strong> +1-516-800-1108
                  </span>
                </li>
                <li
                  style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                  }}
                >
                  <img
                    src="/icons/bullet-blue.svg"
                    alt="Bullet"
                    width={12}
                    height={12}
                    style={{ marginTop: '6px' }}
                  />
                  <div>
                    <strong>HIPAA/Security Incidents:</strong> email at
                    info@dochyve.com
                    <br />
                    <span
                      style={{
                        fontStyle: 'italic',
                        color: '#6b7280',
                        fontSize: '14px',
                      }}
                    >
                      with the subject line "HIPAA Inquiry" or "Security
                      Incident".
                    </span>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </Content>

        {/* CALL TO ACTION */}
        <div
          style={{
            backgroundColor: '#0D257B',
            backgroundImage: 'url("/images/cta-bg.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '102%',
            backgroundPosition: 'center',
            padding: '80px 20px',
            textAlign: 'center',
            margin: '0 10% 80px 10%',
            borderRadius: '16px',
            position: 'relative',
          }}
        >
          <Title
            level={2}
            style={{ color: '#fff', marginBottom: '32px', fontWeight: 800 }}
          >
            Become A Partner And Unlock Endless Growth Opportunities
          </Title>
          <Button
            size="large"
            style={{
              borderRadius: '24px',
              padding: '0 40px',
              fontWeight: 700,
              color: '#102e7a',
              height: '48px',
              fontSize: '16px',
            }}
          >
            Apply now
          </Button>
        </div>

        {/* FOOTER */}
        <Footer
          style={{
            backgroundColor: '#0a1d4d',
            color: '#fff',
            padding: '80px 10% 32px 10%',
          }}
        >
          <Row gutter={[32, 48]}>
            <Col xs={24} md={6}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px',
                }}
              >
                <img
                  src="/icons/logo-light.svg"
                  alt="DocHyve Logo"
                  height={32}
                />
              </div>
              <Paragraph style={{ color: '#9ca3af', fontSize: '15px' }}>
                Get the Doc Hyve app
              </Paragraph>
              <Space>
                <img
                  src="/images/app-store.svg"
                  alt="Download on App Store"
                  height={40}
                  style={{ cursor: 'pointer' }}
                />
                <img
                  src="/images/google-play.svg"
                  alt="Get it on Google Play"
                  height={40}
                  style={{ cursor: 'pointer' }}
                />
              </Space>
            </Col>
            <Col xs={12} md={6}>
              <Title
                level={5}
                style={{
                  color: '#9ca3af',
                  marginBottom: '24px',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Company
              </Title>
              <Space
                direction="vertical"
                size="middle"
                style={{ color: '#fff' }}
              >
                <Text
                  style={{ color: '#fff', cursor: 'pointer', fontSize: '15px' }}
                >
                  Home
                </Text>
                <Text
                  style={{ color: '#fff', cursor: 'pointer', fontSize: '15px' }}
                >
                  About us
                </Text>
                <Text
                  style={{ color: '#fff', cursor: 'pointer', fontSize: '15px' }}
                >
                  Careers
                </Text>
                <Text
                  style={{ color: '#fff', cursor: 'pointer', fontSize: '15px' }}
                >
                  Blogs
                </Text>
                <Text
                  style={{ color: '#fff', cursor: 'pointer', fontSize: '15px' }}
                >
                  News
                </Text>
                <Text
                  style={{ color: '#fff', cursor: 'pointer', fontSize: '15px' }}
                >
                  Contact Us
                </Text>
                <Text
                  style={{ color: '#fff', cursor: 'pointer', fontSize: '15px' }}
                >
                  Help
                </Text>
              </Space>
            </Col>
            <Col xs={12} md={6}>
              <Title
                level={5}
                style={{
                  color: '#9ca3af',
                  marginBottom: '24px',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Insurance Carriers
              </Title>
              <Space
                direction="vertical"
                size="middle"
                style={{ color: '#fff' }}
              >
                <Text
                  style={{ color: '#fff', cursor: 'pointer', fontSize: '15px' }}
                >
                  Aetna
                </Text>
                <Text
                  style={{ color: '#fff', cursor: 'pointer', fontSize: '15px' }}
                >
                  Aetna Dental
                </Text>
                <Text
                  style={{ color: '#fff', cursor: 'pointer', fontSize: '15px' }}
                >
                  Ambetter
                </Text>
                <Text
                  style={{ color: '#fff', cursor: 'pointer', fontSize: '15px' }}
                >
                  Anthem Blue Cross Blue Shield
                </Text>
                <Text
                  style={{ color: '#fff', cursor: 'pointer', fontSize: '15px' }}
                >
                  Blue Cross Blue Shield
                </Text>
                <Text
                  style={{ color: '#fff', cursor: 'pointer', fontSize: '15px' }}
                >
                  Cigna
                </Text>
                <Text
                  style={{
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '15px',
                    textDecoration: 'underline',
                  }}
                >
                  View More
                </Text>
              </Space>
            </Col>
            <Col xs={12} md={6}>
              <Title
                level={5}
                style={{
                  color: '#9ca3af',
                  marginBottom: '24px',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Top Specialties
              </Title>
              <Space
                direction="vertical"
                size="middle"
                style={{ color: '#fff' }}
              >
                <Text
                  style={{ color: '#fff', cursor: 'pointer', fontSize: '15px' }}
                >
                  Primary Care Doctor
                </Text>
                <Text
                  style={{ color: '#fff', cursor: 'pointer', fontSize: '15px' }}
                >
                  Urgent Care
                </Text>
                <Text
                  style={{ color: '#fff', cursor: 'pointer', fontSize: '15px' }}
                >
                  Dermatologist
                </Text>
                <Text
                  style={{ color: '#fff', cursor: 'pointer', fontSize: '15px' }}
                >
                  OB-GYN
                </Text>
                <Text
                  style={{ color: '#fff', cursor: 'pointer', fontSize: '15px' }}
                >
                  Dentist
                </Text>
                <Text
                  style={{ color: '#fff', cursor: 'pointer', fontSize: '15px' }}
                >
                  Psychiatrist
                </Text>
                <Text
                  style={{
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '15px',
                    textDecoration: 'underline',
                  }}
                >
                  View More
                </Text>
              </Space>
            </Col>
          </Row>

          <Divider
            style={{ borderColor: '#1e3a8a', margin: '48px 0 24px 0' }}
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: '#9ca3af',
            }}
          >
            <Text style={{ color: '#9ca3af', fontSize: '14px' }}>
              © 2077 Untitled UI. All rights reserved.
            </Text>
            <Space size="large">
              <img
                src="/icons/social-twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
                style={{ cursor: 'pointer' }}
              />
              <img
                src="/icons/social-linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                style={{ cursor: 'pointer' }}
              />
              <img
                src="/icons/social-facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
                style={{ cursor: 'pointer' }}
              />
            </Space>
          </div>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}
