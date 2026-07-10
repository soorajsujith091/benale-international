import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { TrendingUp, Heart, Gift, CheckCircle, ChevronDown, X, Upload } from 'lucide-react';

const benefits = [
  { icon: TrendingUp, title: 'Grow With Us', desc: 'We invest in our team\'s development through continuous training, mentorship programs, and clear career progression paths. Many of our senior leaders started in entry-level positions.' },
  { icon: Heart, title: 'A Culture of Care', desc: 'We believe that happy team members create happy guests. Our culture prioritizes work-life balance, employee wellness, and a supportive environment where everyone feels valued.' },
  { icon: Gift, title: 'Exceptional Benefits', desc: 'Competitive salaries, comprehensive health insurance, staff meals, accommodation options, and exclusive discounts across all Benale Group properties.' },
];

const openings = [
  {
    title: 'Front Office Associate',
    department: 'Front Office',
    location: 'Kannur',
    type: 'Full-time',
    description: 'Be the first face of Benale International. Welcome guests, handle check-ins and check-outs, and ensure a seamless arrival experience.',
    requirements: ['Excellent communication skills', 'Hospitality experience preferred', 'Proficiency in English and Malayalam'],
  },
  {
    title: 'Restaurant Server',
    department: 'F&B Service',
    location: 'Kannur',
    type: 'Full-time',
    description: 'Deliver exceptional dining experiences at Bel Canto and Cafe Lounge. Take orders, serve food and beverages, and anticipate guest needs.',
    requirements: ['1+ years restaurant experience', 'Knowledge of food and wine', 'Warm personality'],
  },
  {
    title: 'Sous Chef',
    department: 'Kitchen',
    location: 'Kannur',
    type: 'Full-time',
    description: 'Support our Executive Chef in creating culinary masterpieces. Lead a section of the kitchen and maintain the highest standards.',
    requirements: ['3+ years in a fine-dining kitchen', 'Culinary degree preferred', 'Passion for Kerala cuisine'],
  },
  {
    title: 'Housekeeping Supervisor',
    department: 'Housekeeping',
    location: 'Kannur',
    type: 'Full-time',
    description: 'Lead our housekeeping team in maintaining impeccable standards across all guest rooms and public areas.',
    requirements: ['2+ years housekeeping experience', 'Leadership skills', 'Attention to detail'],
  },
];

/* ─── Why Join Us ─── */
function WhyJoinUs() {
  const { ref, visible } = useScrollReveal();

  return (
    <section style={{ backgroundColor: 'var(--color-bg-primary)' }} className="section-padding">
      <div className="container-luxury">
        <h2 className="font-heading-2 text-center mb-16">Why Benale International?</h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className="text-center p-12"
              style={{
                backgroundColor: 'white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.15}s`,
              }}
            >
              <benefit.icon className="w-12 h-12 mx-auto mb-6" style={{ color: 'var(--color-accent-gold)', strokeWidth: 1.5 }} />
              <h3 className="font-heading-3">{benefit.title}</h3>
              <p className="mt-4" style={{ color: 'var(--color-text-secondary)' }}>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Current Openings ─── */
function CurrentOpenings() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const { ref, visible } = useScrollReveal();

  return (
    <section style={{ backgroundColor: 'var(--color-bg-white)' }} className="section-padding">
      <div className="container-luxury" style={{ maxWidth: '900px' }}>
        <h2 className="font-heading-2 text-center mb-12">Current Openings</h2>
        <div ref={ref} className="space-y-4">
          {openings.map((job, i) => (
            <div
              key={job.title}
              className="overflow-hidden"
              style={{
                backgroundColor: 'var(--color-bg-primary)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.1}s`,
              }}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div>
                  <h3 className="font-heading-3" style={{ fontSize: '1.1rem' }}>{job.title}</h3>
                  <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>{job.department}</p>
                  <p className="font-label mt-1" style={{ color: 'var(--color-text-muted)' }}>{job.location} &middot; {job.type}</p>
                </div>
                <ChevronDown
                  className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                  style={{
                    color: 'var(--color-text-muted)',
                    transform: expanded === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: expanded === i ? '300px' : '0',
                  opacity: expanded === i ? 1 : 0,
                }}
              >
                <div className="px-6 pb-6">
                  <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>{job.description}</p>
                  <p className="font-label mb-2" style={{ color: 'var(--color-accent-gold)' }}>Requirements:</p>
                  <ul className="space-y-1 mb-4">
                    {job.requirements.map((req) => (
                      <li key={req} className="text-sm flex items-center gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-accent-gold)' }} />
                        {req}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#application-form"
                    className="inline-block font-nav transition-colors hover:underline"
                    style={{ color: 'var(--color-accent-gold)' }}
                  >
                    Apply for this position &darr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Application Form ─── */
function ApplicationForm() {
  const { ref, visible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    nationality: '',
    workExperience: '',
    position: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (formData.firstName.length < 2) newErrors.firstName = 'First name is required';
    if (formData.lastName.length < 2) newErrors.lastName = 'Last name is required';
    if (!/^\+?[\d\s-]{10,}$/.test(formData.contactNumber)) newErrors.contactNumber = 'Valid contact number required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email required';
    if (!formData.nationality) newErrors.nationality = 'Nationality is required';
    if (formData.workExperience.length < 20) newErrors.workExperience = 'Minimum 20 characters required';
    if (!formData.position) newErrors.position = 'Please select a position';
    if (!file) newErrors.resume = 'Please upload your resume';
    else if (file.size > 5 * 1024 * 1024) newErrors.resume = 'File size must be under 5MB';
    else if (!/\.(pdf|doc|docx)$/i.test(file.name)) newErrors.resume = 'Only PDF or DOC files accepted';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      firstName: '',
      lastName: '',
      contactNumber: '',
      email: '',
      nationality: '',
      workExperience: '',
      position: '',
    });
    setFile(null);
    setErrors({});
  };

  const inputClass = (field: string) =>
    `w-full p-4 text-sm font-body transition-all duration-300 focus:outline-none ${
      errors[field] ? 'border-red-500' : 'border-[var(--color-border)]'
    }`;

  if (submitted) {
    return (
      <section id="application-form" style={{ backgroundColor: 'var(--color-bg-primary)' }} className="section-padding">
        <div className="container-luxury" style={{ maxWidth: '700px' }}>
          <div className="text-center p-12" style={{ backgroundColor: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: '#27ae60' }}
            >
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-heading-3">Application Submitted!</h3>
            <p className="mt-4" style={{ color: 'var(--color-text-secondary)' }}>
              Thank you for your interest in joining Benale International. Our HR team will review your application and contact you within 5 business days.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 font-nav gold-underline"
              style={{ color: 'var(--color-accent-gold)' }}
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="application-form" style={{ backgroundColor: 'var(--color-bg-primary)' }} className="section-padding">
      <div className="container-luxury" style={{ maxWidth: '700px' }}>
        <div
          ref={ref}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <h2 className="font-heading-2 text-center">Apply Now</h2>
          <p className="text-center mt-4 mb-12" style={{ color: 'var(--color-text-secondary)' }}>
            Fill out the form below and we'll get back to you within 5 business days.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="font-label block mb-2">First Name *</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className={inputClass('firstName')}
                  style={{ borderWidth: '1px', borderStyle: 'solid' }}
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="font-label block mb-2">Last Name *</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className={inputClass('lastName')}
                  style={{ borderWidth: '1px', borderStyle: 'solid' }}
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
                {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="font-label block mb-2">Contact Number *</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className={inputClass('contactNumber')}
                  style={{ borderWidth: '1px', borderStyle: 'solid' }}
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                />
                {errors.contactNumber && <p className="text-xs text-red-500 mt-1">{errors.contactNumber}</p>}
              </div>
              <div>
                <label className="font-label block mb-2">Email *</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className={inputClass('email')}
                  style={{ borderWidth: '1px', borderStyle: 'solid' }}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="font-label block mb-2">Nationality *</label>
                <input
                  type="text"
                  placeholder="Enter your nationality"
                  className={inputClass('nationality')}
                  style={{ borderWidth: '1px', borderStyle: 'solid' }}
                  value={formData.nationality}
                  onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                />
                {errors.nationality && <p className="text-xs text-red-500 mt-1">{errors.nationality}</p>}
              </div>
              <div>
                <label className="font-label block mb-2">Position *</label>
                <select
                  className={inputClass('position')}
                  style={{ borderWidth: '1px', borderStyle: 'solid', backgroundColor: 'white' }}
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                >
                  <option value="">Select a position</option>
                  <option>Front Office Associate</option>
                  <option>Restaurant Server</option>
                  <option>Sous Chef</option>
                  <option>Housekeeping Supervisor</option>
                  <option>Other</option>
                </select>
                {errors.position && <p className="text-xs text-red-500 mt-1">{errors.position}</p>}
              </div>
            </div>

            <div>
              <label className="font-label block mb-2">Work Experience *</label>
              <textarea
                rows={4}
                placeholder="Briefly describe your relevant work experience..."
                className={inputClass('workExperience')}
                style={{ borderWidth: '1px', borderStyle: 'solid', resize: 'vertical' }}
                value={formData.workExperience}
                onChange={(e) => setFormData({ ...formData, workExperience: e.target.value })}
              />
              {errors.workExperience && <p className="text-xs text-red-500 mt-1">{errors.workExperience}</p>}
            </div>

            {/* File Upload */}
            <div>
              <label className="font-label block mb-2">Resume *</label>
              <div
                className="relative border-2 border-dashed p-8 text-center cursor-pointer transition-colors duration-300 hover:border-[var(--color-accent-gold)]"
                style={{ borderColor: errors.resume ? '#ef4444' : 'var(--color-border)' }}
                onClick={() => document.getElementById('resume-upload')?.click()}
              >
                <input
                  id="resume-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
                {file ? (
                  <div className="flex items-center justify-center gap-3">
                    <Upload className="w-5 h-5" style={{ color: 'var(--color-accent-gold)' }} />
                    <span className="text-sm">{file.name}</span>
                    <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </span>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setFile(null); }}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <X className="w-4 h-4" style={{ color: 'var(--color-text-muted)' }} />
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="w-8 h-8 mx-auto mb-3" style={{ color: 'var(--color-text-muted)' }} />
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      Click to upload or drag and drop
                    </p>
                    <p className="font-label mt-2" style={{ color: 'var(--color-text-muted)' }}>
                      PDF or DOC, max 5MB
                    </p>
                  </>
                )}
              </div>
              {errors.resume && <p className="text-xs text-red-500 mt-1">{errors.resume}</p>}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 font-nav text-white transition-all duration-300 disabled:opacity-50"
              style={{ backgroundColor: 'var(--color-accent-gold)', letterSpacing: '0.1em' }}
              onMouseEnter={(e) => { if (!submitting) (e.target as HTMLElement).style.backgroundColor = 'var(--color-accent-gold-light)'; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = 'var(--color-accent-gold)'; }}
            >
              {submitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─── Careers Page ─── */
export default function CareersPage() {
  return (
    <div>
      <Navbar />
      <PageHeader
        title="Careers"
        subtitle="Join a team that celebrates excellence in hospitality"
        backgroundImage="/assets/careers-header.jpg"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Careers', href: '/careers' }]}
      />
      <WhyJoinUs />
      <CurrentOpenings />
      <ApplicationForm />
      <Footer />
    </div>
  );
}
