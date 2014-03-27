json.array!(@discussions) do |discussion|
  json.extract! discussion, :id, :project_id, :user_id, :title, :body
  json.url discussion_url(discussion, format: :json)
end
