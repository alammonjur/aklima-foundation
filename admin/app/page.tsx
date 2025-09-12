'use client'

import React, { useState, useEffect } from 'react'
import {
  HomeIcon,
  DocumentTextIcon,
  UserGroupIcon,
  NewspaperIcon,
  Cog6ToothIcon,
  PencilIcon,
  TrashIcon,
  PlusIcon
} from '@heroicons/react/24/outline'

interface ContentItem {
  id: string
  title: string
  type: 'hero' | 'program' | 'news' | 'testimonial'
  [key: string]: any
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [contentItems, setContentItems] = useState<ContentItem[]>([])
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null)

  useEffect(() => {
    // Load content from JSON files (in a real app, this would be an API call)
    loadContent()
  }, [])

  const loadContent = async () => {
    // Mock loading content - in production, this would fetch from your JSON files
    const mockContent: ContentItem[] = [
      { id: '1', title: 'Hero Section', type: 'hero' },
      { id: '2', title: 'Education Program', type: 'program' },
      { id: '3', title: 'Healthcare Program', type: 'program' },
      { id: '4', title: 'Foundation Launch News', type: 'news' },
      { id: '5', title: 'Maria Santos Testimonial', type: 'testimonial' },
    ]
    setContentItems(mockContent)
  }

  const handleEdit = (item: ContentItem) => {
    setEditingItem(item)
  }

  const handleSave = () => {
    // Save logic here - would update JSON files or send to API
    console.log('Saving content item:', editingItem)
    setEditingItem(null)
    // Reload content
    loadContent()
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      // Delete logic here
      console.log('Deleting item:', id)
      loadContent()
    }
  }

  const renderSidebar = () => (
    <div className="sidebar">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-800">Foundation Admin</h1>
      </div>
      <nav className="px-4">
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center px-4 py-2 text-left rounded-lg transition-colors ${
                activeTab === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <HomeIcon className="w-5 h-5 mr-3" />
              Dashboard
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('hero')}
              className={`w-full flex items-center px-4 py-2 text-left rounded-lg transition-colors ${
                activeTab === 'hero' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <DocumentTextIcon className="w-5 h-5 mr-3" />
              Hero Section
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('programs')}
              className={`w-full flex items-center px-4 py-2 text-left rounded-lg transition-colors ${
                activeTab === 'programs' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <UserGroupIcon className="w-5 h-5 mr-3" />
              Programs
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('news')}
              className={`w-full flex items-center px-4 py-2 text-left rounded-lg transition-colors ${
                activeTab === 'news' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <NewspaperIcon className="w-5 h-5 mr-3" />
              News & Updates
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`w-full flex items-center px-4 py-2 text-left rounded-lg transition-colors ${
                activeTab === 'testimonials' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <UserGroupIcon className="w-5 h-5 mr-3" />
              Testimonials
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center px-4 py-2 text-left rounded-lg transition-colors ${
                activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Cog6ToothIcon className="w-5 h-5 mr-3" />
              Settings
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )

  const renderContentList = (type: string) => {
    const filteredItems = contentItems.filter(item => item.type === type)

    return (
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 capitalize">{type} Management</h2>
          <button className="btn btn-primary flex items-center">
            <PlusIcon className="w-4 h-4 mr-2" />
            Add New {type}
          </button>
        </div>

        <div className="space-y-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500">Type: {item.type}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <PencilIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderEditor = () => {
    if (!editingItem) return null

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-screen overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6">Edit {editingItem.title}</h2>

          <div className="form-group">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-input"
              value={editingItem.title}
              onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
            />
          </div>

          {editingItem.type === 'news' && (
            <>
              <div className="form-group">
                <label className="form-label">Excerpt</label>
                <textarea
                  className="form-input form-textarea"
                  placeholder="Brief summary of the article..."
                />
              </div>
              <div className="form-group">
                <label className="form-label">Content</label>
                <textarea
                  className="form-input form-textarea"
                  style={{ minHeight: '200px' }}
                  placeholder="Full article content..."
                />
              </div>
              <div className="form-group">
                <label className="form-label">Category</label>
                <select className="form-input">
                  <option>Education</option>
                  <option>Healthcare</option>
                  <option>Environment</option>
                  <option>Economic Development</option>
                </select>
              </div>
            </>
          )}

          {editingItem.type === 'program' && (
            <>
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                  className="form-input form-textarea"
                  placeholder="Program description..."
                />
              </div>
              <div className="form-group">
                <label className="form-label">Beneficiaries</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g., 25,000+"
                />
              </div>
            </>
          )}

          {editingItem.type === 'testimonial' && (
            <>
              <div className="form-group">
                <label className="form-label">Person Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Full name"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Role</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Their role or occupation"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Country or region"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Testimonial</label>
                <textarea
                  className="form-input form-textarea"
                  placeholder="Their testimonial or quote..."
                />
              </div>
            </>
          )}

          <div className="flex justify-end space-x-4 mt-6">
            <button
              onClick={() => setEditingItem(null)}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="btn btn-primary"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    )
  }

  const renderDashboard = () => (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Programs</h3>
          <p className="text-3xl font-bold text-blue-600">4</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">News Articles</h3>
          <p className="text-3xl font-bold text-green-600">3</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Testimonials</h3>
          <p className="text-3xl font-bold text-purple-600">3</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Lives Impacted</h3>
          <p className="text-3xl font-bold text-orange-600">50K+</p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="btn btn-primary text-left p-4 h-auto">
            <h3 className="font-semibold mb-2">Update Hero Section</h3>
            <p className="text-sm opacity-90">Modify the main banner and call-to-action</p>
          </button>
          <button className="btn btn-secondary text-left p-4 h-auto">
            <h3 className="font-semibold mb-2">Add News Article</h3>
            <p className="text-sm opacity-90">Share the latest foundation updates</p>
          </button>
          <button className="btn btn-primary text-left p-4 h-auto">
            <h3 className="font-semibold mb-2">Manage Programs</h3>
            <p className="text-sm opacity-90">Update program information and statistics</p>
          </button>
          <button className="btn btn-secondary text-left p-4 h-auto">
            <h3 className="font-semibold mb-2">View Website</h3>
            <p className="text-sm opacity-90">See how your changes look on the live site</p>
          </button>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard()
      case 'hero':
        return (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Hero Section</h1>
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Edit Hero Content</h2>
              <div className="form-group">
                <label className="form-label">Main Title</label>
                <input type="text" className="form-input" defaultValue="Building a Better Tomorrow" />
              </div>
              <div className="form-group">
                <label className="form-label">Subtitle</label>
                <input type="text" className="form-input" defaultValue="Through education, healthcare, and sustainable development" />
              </div>
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea className="form-input form-textarea" defaultValue="Join us in creating lasting change that empowers communities and transforms lives around the world." />
              </div>
              <div className="form-group">
                <label className="form-label">Primary Button Text</label>
                <input type="text" className="form-input" defaultValue="Get Involved" />
              </div>
              <button className="btn btn-primary">Save Changes</button>
            </div>
          </div>
        )
      case 'programs':
        return (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Programs</h1>
            {renderContentList('program')}
          </div>
        )
      case 'news':
        return (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">News & Updates</h1>
            {renderContentList('news')}
          </div>
        )
      case 'testimonials':
        return (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Testimonials</h1>
            {renderContentList('testimonial')}
          </div>
        )
      case 'settings':
        return (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Settings</h1>
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Foundation Information</h2>
              <div className="form-group">
                <label className="form-label">Foundation Name</label>
                <input type="text" className="form-input" defaultValue="Aklima Progressive Foundation" />
              </div>
              <div className="form-group">
                <label className="form-label">Contact Email</label>
                <input type="email" className="form-input" defaultValue="info@aklimafoundation.org" />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-input" defaultValue="+1-555-0123" />
              </div>
              <div className="form-group">
                <label className="form-label">Address</label>
                <textarea className="form-input form-textarea" defaultValue="123 Foundation Way, Progressive City, PC 12345" />
              </div>
              <button className="btn btn-primary">Save Settings</button>
            </div>
          </div>
        )
      default:
        return renderDashboard()
    }
  }

  return (
    <div className="admin-container">
      {renderSidebar()}
      <main className="main-content">
        {renderContent()}
      </main>
      {renderEditor()}
    </div>
  )
}
