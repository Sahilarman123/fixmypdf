export default function Settings() {
    return (
      <div>
        <h1 className="mb-4">Settings</h1>
        
        <div className="card mb-4">
          <h3 className="mb-4">General Settings</h3>
          <form>
            <div className="form-group">
              <label className="form-label" htmlFor="site-name">Site Name</label>
              <input 
                type="text" 
                id="site-name" 
                className="input" 
                defaultValue="FixMyPDF Admin" 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="site-description">Site Description</label>
              <textarea 
                id="site-description" 
                className="input" 
                rows="3" 
                defaultValue="Administrative panel for FixMyPDF and operations"
              ></textarea>
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="contact-email">Contact Email</label>
              <input 
                type="email" 
                id="contact-email" 
                className="input" 
                defaultValue="admin@pdftools.com" 
              />
            </div>
            
            <button type="submit" className="btn btn-primary">Save Changes</button>
          </form>
        </div>
        
        <div className="card mb-4">
          <h3 className="mb-4">Email Settings</h3>
          <form>
            <div className="form-group">
              <label className="form-label" htmlFor="smtp-host">SMTP Host</label>
              <input 
                type="text" 
                id="smtp-host" 
                className="input" 
                defaultValue="smtp.example.com" 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="smtp-port">SMTP Port</label>
              <input 
                type="number" 
                id="smtp-port" 
                className="input" 
                defaultValue="587" 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="smtp-username">SMTP Username</label>
              <input 
                type="text" 
                id="smtp-username" 
                className="input" 
                defaultValue="user@example.com" 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="smtp-password">SMTP Password</label>
              <input 
                type="password" 
                id="smtp-password" 
                className="input" 
                defaultValue="********" 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="email-encryption">Encryption</label>
              <select id="email-encryption" className="input">
                <option value="tls">TLS</option>
                <option value="ssl">SSL</option>
                <option value="none">None</option>
              </select>
            </div>
            
            <button type="submit" className="btn btn-primary">Save Changes</button>
            <button type="button" className="btn btn-outline" style={{ marginLeft: '10px' }}>
              Test Connection
            </button>
          </form>
        </div>
        
        <div className="card">
          <h3 className="mb-4">API Settings</h3>
          <form>
            <div className="form-group">
              <label className="form-label" htmlFor="api-key">API Key</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  id="api-key" 
                  className="input" 
                  defaultValue="sk_live_51J6KopEqTsjdJ9ue8DJs" 
                  readOnly
                />
                <button type="button" className="btn btn-outline">Regenerate</button>
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="api-url">API URL</label>
              <input 
                type="text" 
                id="api-url" 
                className="input" 
                defaultValue="https://api.pdftools.com/v1" 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="api-version">API Version</label>
              <select id="api-version" className="input">
                <option value="v1">v1</option>
                <option value="v2">v2</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="request-timeout">Request Timeout (seconds)</label>
              <input 
                type="number" 
                id="request-timeout" 
                className="input" 
                defaultValue="30" 
              />
            </div>
            
            <button type="submit" className="btn btn-primary">Save Changes</button>
          </form>
        </div>
      </div>
    );
  }