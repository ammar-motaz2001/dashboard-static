import {
  ArrowRight,
  Bell,
  CreditCard,
  Home,
  LayoutDashboard,
  LogIn,
  Search,
  Settings,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link, Navigate, NavLink, Outlet, Route, Routes } from 'react-router-dom';

interface StatCard {
  id: string;
  title: string;
  value: string;
  trend: string;
}

interface SidebarItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

const stats: StatCard[] = [
  { id: 'revenue', title: 'Monthly Revenue', value: '$48,250', trend: '+12.5%' },
  { id: 'new-users', title: 'New Users', value: '1,420', trend: '+8.2%' },
  { id: 'churn', title: 'Churn Rate', value: '2.1%', trend: '-0.4%' },
  { id: 'active', title: 'Active Projects', value: '34', trend: '+6.0%' },
];

const sidebarItems: SidebarItem[] = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { label: 'Projects', icon: Home, path: '/dashboard/projects' },
  { label: 'Team', icon: Users, path: '/dashboard/team' },
  { label: 'Billing', icon: CreditCard, path: '/dashboard/billing' },
  { label: 'Settings', icon: Settings, path: '/dashboard/settings' },
];

function SignInPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-14">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900" />
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute -bottom-16 right-4 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

      <section className="relative grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-soft backdrop-blur xl:grid-cols-2">
        <aside className="hidden flex-col justify-between bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 p-10 xl:flex">
          <div className="space-y-4">
            <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-200">
              TeamFlow Dashboard
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white">
              Manage your business in one smart dashboard.
            </h1>
            <p className="max-w-md text-slate-200/80">
              Track analytics, monitor team performance, and make confident decisions with
              real-time insights.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
            "This dashboard helped our team increase delivery speed by 40% in one quarter."
          </div>
        </aside>

        <div className="p-8 sm:p-12">
          <div className="mx-auto max-w-sm space-y-8">
            <header className="space-y-2">
              <h2 className="text-3xl font-semibold text-white">Sign in</h2>
              <p className="text-sm text-slate-400">Welcome back. Please enter your details.</p>
            </header>

            <form className="space-y-4">
              <label className="block space-y-2">
                <span className="text-sm text-slate-300">Email</span>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-indigo-400"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm text-slate-300">Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-indigo-400"
                />
              </label>

              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-indigo-400"
              >
                <LogIn size={16} />
                Sign in
              </button>
            </form>

            <p className="text-center text-sm text-slate-400">
              Demo navigation:{' '}
              <Link
                to="/dashboard"
                className="font-medium text-indigo-300 hover:text-indigo-200"
              >
                Open dashboard
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

interface DashboardSectionProps {
  description: string;
  title: string;
}

function DashboardHeader({ description, title }: DashboardSectionProps) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur">
      <div>
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-200 hover:bg-white/10"
        >
          <Search size={18} />
        </button>
        <button
          type="button"
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-200 hover:bg-white/10"
        >
          <Bell size={18} />
        </button>
      </div>
    </header>
  );
}

function DashboardLayout() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100">
      <div className="grid min-h-screen w-full gap-6 p-6 lg:grid-cols-[250px_1fr]">
        <aside className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">TeamFlow</p>
            <h2 className="mt-1 text-xl font-semibold text-white">Control Panel</h2>
          </div>
          <nav className="space-y-2 text-sm">
            {sidebarItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                end={item.path === '/dashboard'}
                className={({ isActive }) =>
                  `flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition ${
                    isActive ? 'bg-indigo-500/20 text-indigo-200' : 'hover:bg-white/10'
                  }`
                }
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </aside>

        <Outlet />
      </div>
    </div>
  );
}

function DashboardHomePage() {
  return (
    <main className="space-y-6">
      <DashboardHeader title="Dashboard Overview" description="Welcome back, Ammar. Here is your progress." />
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.id}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{stat.title}</p>
            <p className="mt-3 text-3xl font-semibold text-white">{stat.value}</p>
            <p className="mt-2 text-sm text-emerald-300">{stat.trend} this month</p>
          </article>
        ))}
      </section>
      <section className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <h3 className="text-lg font-medium text-white">Performance</h3>
          <p className="mt-2 text-sm text-slate-400">
            Your team completed 86% of sprint goals this week, with top efficiency in design and
            frontend execution.
          </p>
          <div className="mt-6 h-48 rounded-xl bg-gradient-to-r from-indigo-500/30 via-cyan-400/20 to-emerald-300/20" />
        </article>
        <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <h3 className="text-lg font-medium text-white">Quick Actions</h3>
          <div className="mt-4 space-y-3">
            {['Create Project', 'Invite Team Member', 'Generate Report'].map((action) => (
              <button
                key={action}
                type="button"
                className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-sm hover:bg-white/10"
              >
                <span>{action}</span>
                <ArrowRight size={14} />
              </button>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}

function ProjectsPage() {
  return (
    <main className="space-y-6">
      <DashboardHeader
        title="Projects"
        description="Track your active projects and their current delivery stages."
      />
      <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { label: 'In Progress', value: '12' },
            { label: 'Completed', value: '48' },
            { label: 'At Risk', value: '3' },
          ].map((item) => (
            <article key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{item.label}</p>
              <p className="mt-2 text-3xl font-semibold text-white">{item.value}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
        <h3 className="text-lg font-medium text-white">Project Pipeline</h3>
        <div className="mt-4 space-y-3">
          {[
            { name: 'Customer Portal Redesign', stage: 'UI Review', progress: '78%' },
            { name: 'Marketing Automation', stage: 'Development', progress: '52%' },
            { name: 'Analytics V2', stage: 'QA Testing', progress: '91%' },
          ].map((project) => (
            <div
              key={project.name}
              className="grid gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 md:grid-cols-[1.8fr_1fr_auto]"
            >
              <p className="font-medium text-slate-100">{project.name}</p>
              <p className="text-sm text-slate-300">{project.stage}</p>
              <p className="text-sm text-indigo-300">{project.progress}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function TeamPage() {
  return (
    <main className="space-y-6">
      <DashboardHeader
        title="Team"
        description="Monitor team performance, assignments, and collaboration health."
      />
      <section className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <h3 className="text-lg font-medium text-white">Top Contributors</h3>
          <div className="mt-4 space-y-3">
            {[
              { name: 'Sarah Johnson', role: 'Product Designer', score: '98' },
              { name: 'Omar Khaled', role: 'Frontend Engineer', score: '95' },
              { name: 'Lina Ahmed', role: 'Project Manager', score: '93' },
            ].map((member) => (
              <div
                key={member.name}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <div>
                  <p className="font-medium text-slate-100">{member.name}</p>
                  <p className="text-sm text-slate-400">{member.role}</p>
                </div>
                <p className="text-lg font-semibold text-emerald-300">{member.score}</p>
              </div>
            ))}
          </div>
        </article>
        <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <h3 className="text-lg font-medium text-white">Attendance</h3>
          <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-400">Current Week</p>
            <p className="mt-1 text-3xl font-semibold text-white">96.4%</p>
            <p className="mt-3 text-sm text-emerald-300">+1.8% compared to last week</p>
          </div>
        </article>
      </section>
    </main>
  );
}

function BillingPage() {
  return (
    <main className="space-y-6">
      <DashboardHeader
        title="Billing"
        description="Review payments, invoices, and spending trends in one place."
      />
      <section className="grid gap-4 md:grid-cols-3">
        {[
          { label: 'Current Balance', value: '$12,840' },
          { label: 'Due This Month', value: '$4,250' },
          { label: 'Paid Invoices', value: '32' },
        ].map((card) => (
          <article key={card.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{card.label}</p>
            <p className="mt-2 text-3xl font-semibold text-white">{card.value}</p>
          </article>
        ))}
      </section>
      <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
        <h3 className="text-lg font-medium text-white">Recent Invoices</h3>
        <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
          {[
            { id: 'INV-2408', date: 'Apr 20, 2026', amount: '$1,450', status: 'Paid' },
            { id: 'INV-2407', date: 'Apr 12, 2026', amount: '$2,100', status: 'Pending' },
            { id: 'INV-2406', date: 'Apr 03, 2026', amount: '$880', status: 'Paid' },
          ].map((invoice) => (
            <div
              key={invoice.id}
              className="grid gap-2 border-b border-white/10 bg-white/5 px-4 py-3 last:border-b-0 md:grid-cols-4"
            >
              <p className="font-medium text-slate-100">{invoice.id}</p>
              <p className="text-sm text-slate-300">{invoice.date}</p>
              <p className="text-sm text-slate-100">{invoice.amount}</p>
              <p className="text-sm text-indigo-300">{invoice.status}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function SettingsPage() {
  return (
    <main className="space-y-6">
      <DashboardHeader
        title="Settings"
        description="Manage your account, workspace, and notification preferences."
      />
      <section className="grid gap-6 xl:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <h3 className="text-lg font-medium text-white">Profile Settings</h3>
          <div className="mt-4 space-y-3">
            <label className="block space-y-1">
              <span className="text-sm text-slate-300">Full Name</span>
              <input
                type="text"
                defaultValue="Ammar Motaz"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
              />
            </label>
            <label className="block space-y-1">
              <span className="text-sm text-slate-300">Email Address</span>
              <input
                type="email"
                defaultValue="ammar@teamflow.com"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
              />
            </label>
          </div>
        </article>
        <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <h3 className="text-lg font-medium text-white">Notifications</h3>
          <div className="mt-4 space-y-3">
            {['Email Alerts', 'Push Notifications', 'Weekly Reports'].map((setting) => (
              <div
                key={setting}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2"
              >
                <span className="text-sm text-slate-200">{setting}</span>
                <span className="rounded-full bg-emerald-400/20 px-2 py-1 text-xs text-emerald-300">
                  Enabled
                </span>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" replace />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="billing" element={<BillingPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
