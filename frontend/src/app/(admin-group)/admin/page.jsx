import React from 'react';
import {
  ShoppingBag,
  Users,
  BarChart3,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Package,
  Clock,
  CheckCircle2
} from 'lucide-react';

const DashboardContent = () => {
  const stats = [
    { title: 'Total Revenue', value: '$45,231.89', trend: '+20.1%', positive: true, icon: <BarChart3 className="text-blue-600" /> },
    { title: 'Orders', value: '+2,350', trend: '+180.1%', positive: true, icon: <ShoppingBag className="text-purple-600" /> },
    { title: 'Active Users', value: '+12,234', trend: '+19%', positive: true, icon: <Users className="text-emerald-600" /> },
    { title: 'Avg. Order Value', value: '$98.20', trend: '-4.4%', positive: false, icon: <TrendingUp className="text-orange-600" /> },
  ];
  const recentOrders = [
    { id: '#ORD-7421', customer: 'Olivia Martin', status: 'Delivered', amount: '$250.00', date: '2023-10-24' },
    { id: '#ORD-7422', customer: 'Jackson Lee', status: 'Pending', amount: '$1,200.00', date: '2023-10-24' },
    { id: '#ORD-7423', customer: 'Isabella Nguyen', status: 'Shipped', amount: '$350.00', date: '2023-10-23' },
    { id: '#ORD-7424', customer: 'William Kim', status: 'Cancelled', amount: '$45.00', date: '2023-10-23' },
  ];

  return (
    <div className="w-full min-h-screen md:p-10 space-y-8">

      {/* Header Summary */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Sales Overview</h1>
          <p className="text-slate-500 mt-1 font-medium">Monitoring activity for the last 30 days.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
            Export CSV
          </button>
          <button className="px-4 py-2 bg-indigo-600 rounded-lg text-sm font-semibold text-white hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100">
            Create Order
          </button>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">{stat.icon}</div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full flex items-center gap-0.5 ${stat.positive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                }`}>
                {stat.positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.trend}
              </span>
            </div>
            <div className="mt-5">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{stat.title}</p>
              <h3 className="text-3xl font-black text-slate-900 mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Main Data Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Recent Orders Table */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-white">
            <h3 className="text-lg font-bold text-slate-800">Recent Transactions</h3>
            <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50">
              <MoreHorizontal size={20} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 text-slate-500 text-[11px] font-bold uppercase tracking-widest border-b border-slate-100">
                  <th className="px-6 py-4">Transaction ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentOrders.map((order, i) => (
                  <tr key={i} className="group hover:bg-indigo-50/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900 group-hover:text-indigo-600">{order.id}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 text-[10px] flex items-center justify-center font-bold text-slate-600">
                          {order.customer.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm font-medium text-slate-700">{order.customer}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' :
                          order.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600'
                        }`}>
                        {order.status === 'Delivered' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                        {order.status}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-900 text-right">{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50/50 border-t border-slate-100 text-center">
            <button className="text-sm font-bold text-indigo-600 hover:text-indigo-800">View Full Transaction History</button>
          </div>
        </div>

        {/* Sidebar Widget: Top Sellers */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Top Performing Products</h3>
            <div className="space-y-5">
              {[
                { name: 'Leather Boots', sales: '1,240', growth: '+12%', color: 'bg-orange-100' },
                { name: 'Wireless Earbuds', sales: '850', growth: '+5%', color: 'bg-blue-100' },
                { name: 'Cotton T-Shirt', sales: '520', growth: '-2%', color: 'bg-purple-100' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center`}>
                      <Package className="text-slate-700" size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.sales} units sold</p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold ${item.growth.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {item.growth}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-black transition-all">
              Inventory Report
            </button>
          </div>

          {/* Support Ticket / Notification Prompt */}
          <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-lg shadow-indigo-200">
            <h4 className="font-bold text-lg leading-tight">Need technical assistance?</h4>
            <p className="text-indigo-100 text-sm mt-2 opacity-90">Our admin support team is available 24/7 for store integration issues.</p>
            <button className="mt-5 w-full py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm font-bold transition-all">
              Contact Support
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardContent;